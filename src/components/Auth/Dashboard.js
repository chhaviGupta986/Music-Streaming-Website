import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Carousel from '../Carousel';
import Footer from '../Footer';

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
    <div>
      <h2>Welcome to the Dashboard</h2>
      {userData ? (
        <div>
          <p>
            <strong>Username:</strong> {userData.username}
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
    <div style={{backgroundColor:'black'}}>
    <Navbar />
     <Carousel />   
    
     <Footer />
     </div>
     </>
  );
};

export default Dashboard;
