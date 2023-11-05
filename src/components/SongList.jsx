import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SongList.css'

const SongCard = ({ song }) => {
  return (
    // <div className="card d-flex flex-row">
    //   <img src={song.imgUrl} alt="Song" style={{ width: '100px', height: '100px' }}/>
    //   <div className="container">
    //     <h4><b>{song.title}</b></h4>
    //     <p>{song.artist}</p>
    //     <audio controls>
    //       <source src={song.songUrl} type="audio/mpeg" />
    //       Your browser does not support the audio element.
    //     </audio>
    //   </div>
    // </div>
   <div className='container'  >
   
<div id='idmain' style={{ alignContent:'center',justifyContent:'space-evenly',margin:'15px',
paddingRight:'5px'
  }}>
  
    <div  className="card d-flex flex-wrap col" id="id1" style={{
    // backgroundImage:`url(${song.imgUrl})`

    backgroundImage: `url(${song.imgUrl})`,
    // height: '250px',
     // Set a fixed height for the div
    backgroundSize: 'cover',flexDirection:'row'
    // backgroundPosition: 'center'
     }}>
      {/* <img src={song.imgUrl} alt="Song" style={{ width: '270px', height: '250px' ,objectFit: 'cover'}}/> */}
      <div className="container" style={{flex:'1 0 21%',margin:'5%',height:'100px'}}>
        {/* <h4><b>{song.title}</b></h4>
        <p>{song.artist}</p> */}
        <audio controls >
          <source src={song.songsUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    <h4 className='text-white'><b>{song.title}</b></h4>
</div>
   
   </div>  

  );
};

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/api/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='d-flex flex-row row-3' style={{ display: 'flex', flexWrap: 'wrap' }}>
  {songs.map((song, index) => (
    <div key={index} className="song-list d-flex flex-col" style={{ width: '24%', margin: '5px' }}>
      <SongCard song={song} />
    </div>
  ))}
</div>


  );
};

export default SongList;
