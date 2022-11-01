import React from 'react';
import './Footer.css';
import { AceLight } from '../../assets';
import {AiTwotoneHeart} from 'react-icons/ai';

const Footer = () => {

  const current = new Date();
  const date = current.getFullYear();

  return (
    <div className='ace__footer section__padding-footer'>

    <p> &copy;	 Copyright {date}</p>

    <img src={AceLight} alt='logo'/>

    <p> Designed with <AiTwotoneHeart/> by Ace Designs</p>


    </div>
  )
}

export default Footer