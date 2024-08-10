
import React, { useState, useEffect } from 'react';
import AfterNav from './AfterNav';
import Footer from './Footer';
const YourLikes = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Retrieve user data from localStorage
    

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    setUserData({username, email, password,name });
}, []);



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
<div className='text-white mt-4 fs-3'>        
    <i>You have no likes yet.</i> 
  </div>
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

export default YourLikes;
