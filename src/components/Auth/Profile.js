
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Carousel from '../Carousel';
import Footer from '../Footer';
import AfterNav from '../AfterNav';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Retrieve user data from localStorage
    

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    setUserData({username, email, password,name });
}, []);



//   useEffect(() => {
//     // Make an API call to fetch user data
//     // Replace this with your actual API endpoint
//     fetch('http://localhost:10100/userData')
//       .then((response) => response.json())
//       .then((data) => setUserData(data))
//       .catch((error) => console.error('Error fetching user data:', error));
//   }, []);

  return (<>
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
      
    </div>
  </div>
</nav>
  <div >
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',margin:'25px'}}>
            <h1 id='headline_f' ><h2>Welcome to Your profile</h2></h1>
        </span>
            
    <div>
      
      {userData ? (
        <div className='text-white'>
          <p>
            <strong >Username:</strong> {userData.username}
          </p>
          <p>
            <strong >Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          {/* Add other user information here */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    
     </div>
     <Footer />
     </>
  );
};

export default Profile;
