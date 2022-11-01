import React from 'react';
import './Brand.css';


const Brand = ({imgUrl, brand}) => {
  return (
    <div className="ace__brand">
      <img src={imgUrl} alt="social"/>
      <p>{brand}</p>
    </div>
    
    
  )
}

export default Brand