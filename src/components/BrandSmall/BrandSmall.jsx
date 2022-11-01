import React from 'react';
import './BrandSmall.css';


const Brand = ({imgUrl, brand}) => {
  return (
    <div className="ace__brand-small">
      <img src={imgUrl} alt="social"/>
      <p>{brand}</p>
    </div>
    
    
  )
}

export default Brand