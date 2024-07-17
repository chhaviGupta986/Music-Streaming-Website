import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {

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
          <a className="nav-link active" aria-current="page" href="/" style={{color:'#F78CA2',fontSize:'20px'}}>Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/about" style={{color:'#F78CA2',fontSize:'20px'}}>About</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href='/contact' style={{color:'#F78CA2',fontSize:'20px'}}>Contact Us</a>
        </li>
      </ul>
      <div className='buttons d-flex justify-content-center'>
          <Link to="/register" className='btn btn-dark me-4 rounded-pill px-4 py-2'>Register</Link>
          <Link to="/login" className='btn btn-dark me-4 rounded-pill px-4 py-2'>Login</Link>
                            
        </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar