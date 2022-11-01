import React from 'react'
import './Youtube.css'

const Youtube = ({ embedId, title, url }) => {
  return (
    <div className="video-responsive">
    <iframe
      width="300"
      height="168.75"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <p>{title} </p>
    <a href={`https://www.${url}`} target="_blank" rel="noopener noreferrer">www.{url}</a>
  </div>
);


  
}

export default Youtube