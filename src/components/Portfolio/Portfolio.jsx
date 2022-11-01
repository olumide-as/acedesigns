import React from 'react'
import './Portfolio.css'


const Portfolio = ({imgUrl, title}) => {
  return (
    <div className='ace__portfolio'>
      <img src={imgUrl} alt="services"/>
      <p>{title}</p>
    </div>
  )
}

export default Portfolio