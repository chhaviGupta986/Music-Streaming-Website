import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LikeButton from './LikeButton';
import './SongList.css'
const SongCard = ({ song,user }) => {
    //const [liked, setLiked] = useState(false);

  // const handleLike = async () => {
  //   try {
  //     await axios.post(`http://localhost:1010/api/likes/${song._id}`, { liked: true });
  //     setLiked(true);
  //   } catch (error) {
  //     console.error('Error while updating like status', error);
  //   }
  // };
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
<div style={{ display: 'flex', flexWrap: 'wrap',flexDirection:'row',alignContent:'center',justifyContent:'center',margin:'10px',
paddingRight:'10px'
  }}>
  
    <div  className="card d-flex flex-col" id="id1" style={{
    // backgroundImage:`url(${song.imgUrl})`

    backgroundImage: `url(${song.imgUrl})`,
    // height: '250px',
     // Set a fixed height for the div
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
     }}>
      {/* <img src={song.imgUrl} alt="Song" style={{ width: '270px', height: '250px' ,objectFit: 'cover'}}/> */}
      <div className="container">
      
        <audio controls >
        
          <source src={song.songsUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <LikeButton  songId={song._id} userId={user} />
      </div>
    </div>
    <h4 className='text-white'><b>{song.title}</b></h4>
        {/* <p>{song.artist}</p> */}
</div>

  );
};

const AfterSongList = () => {
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/api/songs');
        setSongs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem('username');
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        const res = await axios.post('http://localhost:1010/api/user/getUser', { username, name, email, password });
        setUser(res.data._id);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    // This will log the user state when it changes
    console.log("hehe", user);
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="song-list d-flex flex-row" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {songs.map((song, index) => (
        <div key={index} className="song-list d-flex flex-col" style={{ width: '24%', margin: '5px' }}>
      <SongCard song={song} />
    </div>
      ))}
    </div>
  );
};

export default AfterSongList;