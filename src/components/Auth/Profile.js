
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
  <AfterNav/>
 <div className="bg-black">
  <div >
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 id='headline_f' ><h2>Welcome to Your Profile</h2></h1>
        </span>
            
    <div>
      
      {userData ? (
        <div style={{fontFamily:'Philosopher,Ubuntu', color:'rgb(247, 140, 162)'}} 
        className='text-center fs-3 mt-3 pb-5'>
        <div>
    <strong>Username:</strong> {userData.username}
  </div>
  <div>
    <strong>Name:</strong> {userData.name}
  </div>
  <div>
    <strong>Email:</strong> {userData.email}
  </div>
          {/* Add other user information here */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    
  </div>
  </div>
     <Footer />
     </>
  );
};

export default Profile;
