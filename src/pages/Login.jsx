/* eslint-disable no-lone-blocks */
import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate=useNavigate()
    const [user, setuser] = useState({
      email : "",
      password : "",
      isLoggedIn: false

    })

   
    const handleChange= (event) =>{
      let name=event.target.name
      let value=event.target.value
      setuser({...user,[name]:value})
    }

      const handleSubmit = async (event) =>{
        event.preventDefault()
        const {email,password}=user
        try {
          const res = await fetch('/login',{
            method:'POST',
            headers:{
              "Content-type" : "application/json"
            },
            body:JSON.stringify({
              email,password
            })

          })

          if(res.status === 400 || !res){
            window.alert("invalid Credentials")
          }else{
            window.alert("Login Succesfully")
            navigate('/');
            
            

          }
        } catch (error) {
          console.log(error)
        }
      }

  return ( <>
  <Navbar />
    <div className='container shadow m-5 bg-black' >
      <div className='row justify-content-center ' >
        <div className='col-md-5  d-flex flex-column align-items-center text-white justify-content-center form' >
          <h1 className='display-4 fw-bolder mb-4 text-center ' style={{color:'#CD5888'}}> Welcome back </h1>
          <p className='lead text-center fs-4 mb-5 ' style={{color:'#CD5888'}}> Enter Your Credentials to login </p>
          <h5 className='mb-4 ' style={{color:'#CD5888'}}>OR</h5>
              <Link to="/register"className='btn btn-light me-4 rounded-pill px-4 py-2 ' > Register </Link>
        </div>
          <div className='col-md-6 md-6 p-4' >
            <h1 className='display-6 fw-bolder mb-5' style={{color:'#F1D4E5'}} > LOGIN </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3" style={{color:'#F1D4E5'}}>
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='enter email' aria-describedby="emailHelp" name='email' value={user.email} onChange={handleChange}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
                <div className="mb-3" style={{color:'#F1D4E5'}}>
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder='enter password' name='password' value={user.password} onChange={handleChange}/>
                </div>
                  <div className="mb-3 form-check" style={{color:'#F1D4E5'}}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Login In</button>
            </form>
          </div>
        </div>
    </div>

    </>
      )
}

export default Login