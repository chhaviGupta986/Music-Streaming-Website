
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Footer from '../components/Footer'
import MusicCard from '../components/SongList'
import Navbar from '../components/Navbar'
import SongList from '../components/SongList'


const Homepage = () => {

  return (
    <>
    <div style={{backgroundColor:'black'}}>
    <Navbar />
     <Carousel />   
    <div className='music-container' style={{ 
    margin:'5%',display:'flex',flexWrap:'wrap'}}>
      <SongList />
    </div>
     <Footer />
     </div>
    </>
  )
}

export default Homepage