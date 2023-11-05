import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SongCard = ({ song,user }) => {
  //const [liked, setLiked] = useState(false);

// const handleLike = async () => {
//   try {
//     await axios.post(`https://tuning-backend.onrender.com/api/likes/${song._id}`, { liked: true });
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
const Likedsong = ({ user }) => {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    const fetchLikedSongs = async () => {
      try {
        const response = await axios.get("https://tuning-backend.onrender.com/api/likes/user/:userId");
        setLikedSongs(response.data);
        console.log("hbdhcd",response.data)
      } catch (error) {
        console.error('Error fetching liked songs:', error);
      }
    };

    if (user) {
      fetchLikedSongs();
    }
  }, [user]);

  return (
    <div>
  <h2>Liked Songs</h2>
  {likedSongs.length > 0 ? (
    <div className="song-list d-flex flex-row">
      {likedSongs.map((song) => (
        <SongCard key={song._id} song={song} user={user} />
      ))}
    </div>
  ) : (
    <p>No liked songs yet.</p>
  )}
</div>
    
  );
};

export default Likedsong;
