import React from 'react';
import './Heading.css';

const Heading = ({title, sub}) => {
  return (
    <div className="ace__heading ">
        <div className="ace__heading-title">
            <h2>{title}</h2>
        </div>

        <div className="ace__heading-sub">
            <h3>{sub}</h3>
        </div>
    </div>
  )
}

export default Heading