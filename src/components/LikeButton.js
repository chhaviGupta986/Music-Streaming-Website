import React,{useState} from 'react';
import axios from 'axios';

const LikeButton = ({ songId, user }) => {
    const [liked, setLiked] = useState(false);
  const handleLike = async () => {
    try {
      console.log("ofc",user)
      const response = await axios.post('https://tuning-backend.onrender.com/api/likes/like', {songId, user });
      setLiked(!liked);
      console.log("cfjnvif",response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error while liking the song:', error); // Handle the error appropriately
    
    }
  };

  return <button onClick={handleLike} style={{
    display: 'inline-block',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.25,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    border: '1px solid #f78ca2',
    borderRadius: '50px',
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    backgroundColor: 'rgb(61, 12, 17)',
    color: '#fff'
  }}>{liked ? 'Liked' : 'Like'}</button>;
};

export default LikeButton;
