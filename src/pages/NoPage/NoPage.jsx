import React, { useState } from 'react';
import './NoPage.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/ace-light.svg';

const MenuGallery = () => (
  <>
    <a href="/#home">Home</a>
    <a href="/#contact">Contact</a>
  </>
)


const NoPage = () => {

  const [toggleMenu, SetToggleMenu] = useState(false);

  return (
    <div className='ace__NoPage section__padding'>

<div className="ace__navbar">
      <img src={logo} alt="logo" />

    
      <div className="ace__navbar-links">
        <MenuGallery/>
      </div>

      <div className="ace__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#ffff" size={24} onClick={() => SetToggleMenu(false)}/>
          : <RiMenu3Line color="#ffff" size={24} onClick={() => SetToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="ace__navbar-menu__container scale-up-tr">
            <div className="ace__navbar-menu__container-links">
            <MenuGallery />
            </div>
          </div>
        )
        }
      </div>
    </div>

      <div className='ace__NoPage_content'>

      <h2>404</h2>
      <h3>There's nothing here</h3>
      <p>Maybe the page you're looking for is not found or never existed</p>
      <a href="/">Back to Home</a>

      </div>


    </div>
  )
}

export default NoPage