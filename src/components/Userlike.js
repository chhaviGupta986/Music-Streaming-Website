import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div style={{ display: 'flex', flexWrap: 'wrap',flexDirection:'row' }}>
  
    <div  className="card d-flex flex-col" style={{ width: '100%', margin: '10px' }}>
      <img src={song.imgUrl} alt="Song" style={{ width: '250px', height: '200px' ,alignContent:'center',justifyContent:'center'}}/>
      <div className="container">
        <h4><b>{song.title}</b></h4>
        <p>{song.artist}</p>
        <audio controls style={{ width: '90%', margin: '10px' }}>
          <source src={song.songsUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        
      </div>
    </div>
  
  </div>
  
  );
  };
    
   


const Userlike = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        const res = await axios.post('http://localhost:1010/api/user/getUser', { username, email, password });
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // This will log the user state when it changes
    console.log(user);
  }, [user]);

  useEffect(() => {
    const fetchLikedSongs = async () => {
      try {
        console.log("here")
        const response = await axios.get(`http://localhost:1010/api/likes/user/${user._id}`,{user});
        setLikedSongs(response.data);
        console.log("usre",user)
        console.log("hello this is user like songs",response.data)
      } catch (error) {
        console.error('Error fetching liked songs:', error);
      }
    };

    if (user) {
        console.log("debfwe")
      fetchLikedSongs();
    }
  }, [user]);
  console.log(user)
  return (
    <div>
  <h2>Liked Songs</h2>
  {likedSongs.length > 0 ? (
    <div className="song-list d-flex flex-row">
      {likedSongs.map((song) => (
        <div key={song._id}>
          <p>Title: {song.title}</p>
          {/* You can access other fields here as well */}
          <SongCard song={song} user={user} />
        </div>
      ))}
    </div>
  ) : (
    <p>No liked songs yet.</p>
  )}
</div>
  );
};

export default Userlike;
