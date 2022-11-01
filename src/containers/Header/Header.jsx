import React, { useState } from 'react';
import './Header.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/ace-light.svg';


const Menu = () => (
  <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#skills">Skills</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </>
)

const Header = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);
  return (
    <div className="ace__navbar">

      <img src={logo} alt="logo" />

      
      <div className="ace__navbar-links">
      <Menu/>
      </div>

      <div className="ace__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="#ffff" size={24} onClick={() => SetToggleMenu(false)}/>
            : <RiMenu3Line color="#ffff" size={24} onClick={() => SetToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="ace__navbar-menu__container scale-up-tr">
              <div className="ace__navbar-menu__container-links">
              <Menu />
              </div>
            </div>
          )

          }
      </div>
 

    </div>
  )
}

export default Header

