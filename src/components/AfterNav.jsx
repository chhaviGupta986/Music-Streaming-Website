import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import Carousel from './Carousel';
import axios from 'axios';
import Footer from './Footer';
import AfterSongList from './AfterSongList';
import SongList from './SongList';
const AfterNav = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const username = localStorage.getItem('username');
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        console.log(username)
        console.log(email)
        console.log(password)
        // Make a request to the backend to fetch the user data
        //const response = await axios.get('https://tuning-backend.onrender.com/api/user/getUser', { username,name, email, password });
        setUser({username,name, email, password }); // Set the user data in the state
        console.log(user); // Check the response data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);
  if (!user) {
    return <div>Loading...</div>; // Add a loading state or spinner
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow-lg p-4" style={{ backgroundColor: 'black' }}>
  <div className="container-fluid" > 
  <span class="material-symbols-outlined" style={{color:'#FFFFFF',fontSize:'70px',color:'#F78CA2'}}
  >music_note</span>
    {/* <a className="navbar-brand" href="/" style={{color:'#F78CA2',fontSize:'50px'}}><b><i>TUNING</i></b></a> */}
    <a className="navbar-brand" href="/" style={{color:'#FFFFFF',fontSize:'50px',fontFamily:'Philosopher'}}><b>Tuning</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="/dashboard" style={{color:'#F78CA2',fontSize:'20px'}}>Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href='/contact' style={{color:'#F78CA2',fontSize:'20px'}}>Your Likes</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href='/addmusic' style={{color:'#F78CA2',fontSize:'20px'}}>Upload </a>
        </li>
      </ul>
      <div className='buttons d-flex justify-content-center'>
          <Link to="/logout" className='btn btn-dark me-4 rounded-pill px-4 py-2'>Logout</Link>
          <Link to="/profile" className='btn btn-dark me-4 rounded-pill px-4 py-2'>Profile</Link>
                            
        </div>
    </div>
  </div>
</nav>
      


<Carousel />
<AfterSongList  />
<Footer />

    </>
  )
}

export default AfterNav