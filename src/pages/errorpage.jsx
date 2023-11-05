import React from 'react'
import Navbar from '../components/Navbar'
import '../components/style.css'
const errorpage = () => {
  return (
    <>
      <Navbar />
      <div className='d-flex' style={{backgroundColor:'#F9DEC9'}}>
      <iframe src="https://lottie.host/?file=a9a3dfd8-a3e7-40d4-afce-1beade46e434/afwrDkfrSP.json" title='404' style={{width:'800px',height:'600px',margin:'2%',background:'trasparent'}}></iframe>

      <div className='d-flex justify-content-center align-items-center'>
        <button type='button' id='gobutton'><span id='gospan'></span>Go Back</button>
      </div>
      </div>
    </>
  )
}

export default errorpage