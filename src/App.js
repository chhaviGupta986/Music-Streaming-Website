import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Homepage from './pages/Homepage';
import Errorpage from './pages/errorpage';
import {Routes,Route,Link} from 'react-router-dom'
import About from './pages/About';
import Logout from './components/Auth/logout';
import Login from './components/Auth/login';
import Registration from './components/Auth/registration';
import Dashboard from './components/Auth/Dashboard';
import AfterNav from './components/AfterNav';
import Profile from './components/Auth/Profile';
import AddMusic from './components/Addmusic';
import AfterSongList from './components/AfterSongList';
import Register from './components/Auth/registration';
import Userlike from './components/Userlike';


const App = () => {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <>   
    
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Errorpage />} />
      <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/register' element={<Register />} />
      <Route path="/dashboard" element = {<AfterNav user={loginUser} />} />
      <Route path="/profile" element = {<Profile />} />
      <Route path="/addmusic" element = {<AddMusic />} />
      <Route path="/liked" element = {<AfterSongList />} />
      <Route path="/likedsongs" element = {<Userlike />} />

  
      

    </Routes>
    
   
    
    
    
     
     
    {/* <Errorpage /> */}
    </>

  );
  
};

export default App;
