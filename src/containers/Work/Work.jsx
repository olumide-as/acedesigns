import React from 'react'
import './Work.css'
import {Heading} from '../../components'
import {Portfolio} from '../../components'
import {ArrowRight, cd1, i9, v1, w1} from '../../assets'
import 'antd/dist/antd.css';


const Work = () => {

  return (
    <div className="ace__work section__padding reveal" id='work'>
        < Heading title="My Work" sub="Recent Projects"/>

        <a href='/gallery'>
        <div className='ace__work-arrow'>
          <h5>All Work</h5>
          <img src={ArrowRight} alt="arrow right" />
        </div>
        </a>

        <div className="ace__work-portfolio">
       
            <a href='/gallery'>
            <Portfolio imgUrl={i9} title='Arts &amp; Illustrations'/>
            </a>
            <a href='/gallery'>
            <Portfolio imgUrl={cd1} title='Corporate Designs'/>
            </a>
            <a href='/gallery'>
            <Portfolio imgUrl={v1} title='Videos &amp; Animations'/>
            </a>
            <a href='/gallery'>
            <Portfolio imgUrl={w1} title='Web Development'/>
            </a>
        </div>

    </div>
  )
}

export default Work