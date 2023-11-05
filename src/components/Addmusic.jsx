import axios from "axios";
import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./firebase.js";


const Upload = () => {
  const [img, setImg] = useState(undefined);
  const [songs, setSongs] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [ songsPerc, setSongsPerc] = useState(0);
  const [inputs, setInputs] = useState({});

  useEffect(() => {

      songs && uploadFile(songs, "songsUrl");
  }, [songs]);

    useEffect(() => {

    img && uploadFile(img, "imgUrl"); 
  }, [img]);


    const uploadFile = (file, fileType) => { 
      const storage = getStorage (app);
      const folder = fileType === "imgUrl" ? "images/" : "songs/";
      const fileName = new Date().getTime()+ file.name;
      const storageRef = ref(storage, folder + fileName);
      const uploadTask = uploadBytesResumable (storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "imgUrl" ? setImgPerc(Math.round(progress)) : setSongsPerc(Math.round(progress));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           console.log('File available at', downloadURL);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL,
              
              
            };
          });
        });
      }
    );
  }
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs)
     await axios.post('https://tuning-backend.onrender.com/api/songs', { ...inputs });
     window.location.reload()
    } catch (error) {
    console.error("dcnh",error);
    }
  };

return(

  // <div className="upload">
  //   <form onSubmit={handleSubmit}>
  //   <div>
  //         <label htmlFor="title">Title: </label>
  //         <input type="text" id="title" onChange={(e) => handleInputChange('title', e.target.value)} />
  //       </div>
  //       <div>
  //         <label htmlFor="artist">Artist: </label>
  //         <input type="text" id="artist" onChange={(e) => handleInputChange('artist', e.target.value)} />
  //       </div>
  //       <div>
  //         <label htmlFor="language">Language: </label>
  //         <input type="text" id="language" onChange={(e) => handleInputChange('language', e.target.value)} />
  //       </div>
  //       <div>
  //         <label htmlFor="album">Album: </label>
  //         <input type="text" id="album" onChange={(e) => handleInputChange('album', e.target.value)} />
  //       </div>
  //     <div>
  //       <label htmlFor="songs"> Songs: </label> {songsPerc > 0 && "Uploading: " + songsPerc + "%"}
  //       <br />
  //       <input type="file" accept="songs/*" id="songs" onChange={(e) => setSongs((prev) => e.target.files[0])} />
  //     </div> <br />
  //     <div>
  //       <label htmlFor="img"> Image: </label> {imgPerc > 0 && "Uploading: " + imgPerc + "%"}
  //       <br />
  //       <input type="file" accept="image/*" id="img" onChange={(e) => setImg((prev) => e.target.files[0])} />
  //     </div>
  //     <br />
  //     <button type="submit"> Upload</button>
  //   </form>
  // </div>
  <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" 
            // style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
            style= {{backgroundImage : "linear-gradient(black,red)"}}>
            {/* style= {{backgroundImage : 'url("bg1.jpg")'}}> */}
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3' style={{fontFamily:'Pacifico,Philosopher,Ubuntu', color:'rgb(247, 140, 162)'}}>Upload Your Song</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start m-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Song Title</strong>
                            </label> <br />
                            <input type="text" id="title" onChange={(e) => handleInputChange('title', e.target.value)} />
                        </div>
                        <div className="mb-3 text-start m-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Artist</strong>
                            </label> <br />
                            <input type="text" id="artist" onChange={(e) => handleInputChange('artist', e.target.value)} />

                        </div>
                        <div className="mb-3 text-start m-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Language</strong>
                            </label> <br />
                            <input type="text" id="language" onChange={(e) => handleInputChange('language', e.target.value)} />

                        </div>
                        
                        <div className="mb-3 text-start m-3">
                             <label htmlFor="exampleInputPassword1" className="form-label">
                                 <strong>Album</strong>
                             </label> <br />
                             <input type="text" id="album" onChange={(e) => handleInputChange('album', e.target.value)} />

                        </div>

                        <div className="mb-3 text-start m-3">
                        <label htmlFor="songs"></label> {songsPerc > 0 && "Uploading: " + songsPerc + "%"}
                                <strong>Song File</strong> <br />
                        
                        <input type="file" accept="songs/*" id="songs" onChange={(e) => setSongs((prev) => e.target.files[0])} />

                        </div>
                        <div className="mb-3 text-start m-3">
                              <label htmlFor="img"> </label> {imgPerc > 0 && "Uploading: " + imgPerc + "%"}
                                 <strong>Upload Cover</strong> <br />
                             
                             <input type="file" accept="image/*" id="img" onChange={(e) => setImg((prev) => e.target.files[0])} />

                        </div>
                        <button type="submit" className="btn fw-bold" style={{backgroundColor:'rgb(247, 140, 162)'}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

)};

export default Upload;

