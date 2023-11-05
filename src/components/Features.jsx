import React from 'react'
import './style.css'
const Features = () => {
  return (
    <>
        <div >
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',margin:'25px'}}>
            <h1 id='headline_f' ><span id='inner_h1'>FEATURES</span></h1>
        </span>
            <div className='d-flex flex-wrap row-md-3 m-10 ' style={{flex: '0 0 30%;'}}>
            <div id='main_1'>
                <div className='circle' id='circle_feat'><img src="https://img.icons8.com/color-glass/48/apple-music.png" alt='feat1' className='circle-icon' /></div>
                <div id='descrip' ><span>Free Streaming! No terms and Conditions</span></div>
            </div>


            <div id='main_1'>
                <div className='circle' id='circle_feat'><img src="https://img.icons8.com/color-glass/48/apple-music.png" alt='feat1' className='circle-icon' /></div>
                <div id='descrip' ><span>Unlesh your inner Musician, publish your own songs.</span></div>
            </div>

            <div id='main_1'>
                <div className='circle' id='circle_feat'><img src="https://img.icons8.com/color-glass/48/apple-music.png" alt='feat1' className='circle-icon' /></div>
                <div id='descrip' ><span>Exclusive Collection of Latest Hits.</span></div>
            </div>

            <div id='main_1'>
                <div className='circle' id='circle_feat'><img src="https://img.icons8.com/color-glass/48/apple-music.png" alt='feat1' className='circle-icon' /></div>
                <div id='descrip' ><span>Make Tuning your go to Music Streaming buddy!</span></div>
            </div>


            <div id='main_1'>
                <div className='circle' id='circle_feat'><img src="https://img.icons8.com/color-glass/48/apple-music.png" alt='feat1' className='circle-icon' /></div>
                <div id='descrip' ><span>Get recognised for your music, by fellow Tuners!</span></div>
            </div>

            <div id='main_1'>
                <div className='circle' id='circle_feat'><img src="https://img.icons8.com/color-glass/48/apple-music.png" alt='feat1' className='circle-icon' /></div>
                <div id='descrip' ><span>Tune to your Heart, no limits.</span></div>
            </div>


            </div>
        </div>

    </>
  )
}

export default Features