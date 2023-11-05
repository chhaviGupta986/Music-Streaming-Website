import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios'
import Auth from '../../modules/Auth.js';
const API_URL='http://localhost:1010'

class Logout extends React.Component {
  	componentWillMount() {
        Auth.deauthenticateUser();
        localStorage.removeItem('username');
  		  axios.get(`${API_URL}/auth/logout`)
	   }

  	render() {
      console.log('getToken',Auth.getToken())
  		return (
        <Navigate push to='/' />
  		);
  	}
}

export default Logout;