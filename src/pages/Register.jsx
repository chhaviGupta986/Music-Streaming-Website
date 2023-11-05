import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
const Register = () => {


    const navigate=useNavigate()
    const [user,setuser] = useState({
      username: "",
      email: "",
      password: ""
    })
  
      const handleInput= (event) =>{
        let name=event.target.name
        let value=event.target.value
        setuser({...user,[name]:value})
      }
  
      const handleSubmit = async (event) =>{
          event.preventDefault()
          const {username,email,password}= user
          
          try {
            const res= await fetch('/register',{
              method: 'POST',
              headers:{
                "Content-type": "application/json"
              },
              body:JSON.stringify({
                username,email,password
              })
            })
  
            if(res.status === 400 || !res){
              window.alert("Already used details")
            }else{
              window.alert("Registered Succesfully")
              console.log(res)
              navigate('/login')
            }
          } catch (error) {
            console.log(error)
          }
      }
  

  return (
    <>
    <Navbar />
        <div className='container shadow m-5 bg-black' >
      <div className='row justify-content-center ' >
        <div className='col-md-5  d-flex flex-column align-items-center text-white justify-content-center form' >
          <h1 className='display-4 fw-bolder mb-4 text-center' style={{color:'#CD5888'}}> Welcome back </h1> 
          <p className='lead text-center fs-4 mb-5 ' style={{color:'#CD5888'}}> Fill your details to Register </p>
          <h5 className='mb-4 ' style={{color:'#CD5888'}}>OR</h5>
              <Link to="/login"className='btn btn-light me-4 rounded-pill px-4 py-2 '> Login </Link> 
        </div> 
          <div className='col-md-6 md-6 p-4' >
            <h1 className='display-6 fw-bolder mb-5' style={{color:'#F1D4E5'}}> REGISTER </h1> 
            <form onSubmit={handleSubmit} method='POST'>
              <div className="mb-3" style={{color:'#F1D4E5'}}>
                <label for="name" className="form-label">Username</label>
                <input type="text" className="form-control" id="name" name='username' value={user.username} onChange={handleInput} />
              </div>
              <div className="mb-3" style={{color:'#F1D4E5'}}>
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={user.email} onChange={handleInput} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
                <div className="mb-3" style={{color:'#F1D4E5'}}>
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handleInput} />
                </div>
                <div className="mb-3 form-check" style={{color:'#F1D4E5'}}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                  </div>
                
                 
                <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
            </form>
          </div> 
        </div> 
    </div> 

    </>
  )
}

export default Register