import React from 'react'
import './Projects.css'
import {Heading} from '../../components';
import {Header} from '../index';
import {Portfolio} from '../../components'
import {Graphics1} from '../../assets'

const Projects = () => {
  return (
    <div className='ace__projects section__padding reveal' id='projects'>
        
        <Header/>

        <Heading title="My Work" sub="All Projects"/>

        <div className='ace__projects-filter'>
        <button> All </button>
        <button> Web Design </button>
        <button> Illustration </button>
        <button> Engineering </button>
        </div>

        <div className="ace__projects-portfolio">
            <Portfolio imgUrl={Graphics1} title='Web Design'/>
            <Portfolio imgUrl={Graphics1} title='Web Design'/>
            <Portfolio imgUrl={Graphics1} title='Web Design'/>
            <Portfolio imgUrl={Graphics1} title='Web Design'/>
        </div>
        
    </div>
  )
}

export default Projects