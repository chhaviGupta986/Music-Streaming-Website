import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Carousel from '../Carousel';
import Footer from '../Footer';
import AfterNav from '../AfterNav';
import SongList from '../SongList';
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Retrieve user data from localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    setUserData({username, email, password });
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
  <AfterNav/>

    <div style={{backgroundColor:'black'}}>
    <Carousel />
{/* <AfterSongList  /> */}
<div className='text-white pt-4 pb-2 fs-2 text-center'>
      <span>Welcome Back {userData ? (
        <span >
        {userData.username} !</span>
          
      ) : (
        <p>Loading user data...</p>
        
      )}
      </span>

    </div>
<SongList  />
     <Footer />
     </div>
     </>
  );
};

export default Dashboard;
