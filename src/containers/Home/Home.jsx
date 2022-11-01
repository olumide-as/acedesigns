import React  from 'react';
import './Home.css';
import mask from "../../assets/Masking.png"
import { AiOutlineArrowDown } from "react-icons/ai";
function Home() {
  return (
    <div className="ace__home section__padding-home" id="home">
      
      <div className="ace__home-content">
        <h1 className='focus-in-expand'>Hi! <br/> I'm Mide</h1>
        <p>I'm an amazing designer <br/> Let's get to work on your next project.</p>
        <a href='#about' className='vibrate-1'> GET STARTED <AiOutlineArrowDown/> </a>
        
      </div>

      <div className="ace__home-bg">
        <img src={mask} alt="mide-bg" className='fade-in-left'/>
      </div>
    </div>
  );
}

export default Home