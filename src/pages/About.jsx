import React from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'

const About = () => {
  return (
    <>
    <Navbar />
        <div className='d-flex flex-row align-items-center justify-content-center bg-black'>
        <iframe src="https://lottie.host/?file=09c30d9c-0977-4105-8bb9-8a70af455c31/8XswMuKAiM.json" title='about us' style={{width:'800px',height:'600px',background:'trasparent'}}></iframe>
        <div className='container shadow m-auto'><Features /></div>
        </div>
    </>
  )
}

export default About