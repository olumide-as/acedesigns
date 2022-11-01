import React from 'react';
import './Services.css';
import { Heading} from '../../components';
import { AiFillEdit, AiOutlineCode, AiOutlineVideoCameraAdd} from "react-icons/ai";




const Services = () => {
  return  (
    <div className="ace__services section__padding reveal"  id="services">
      <Heading title="My Services" sub="What I Offer"/>

      <div className='ace__services-list'>

        <div className='ace__services-list__item'>
          <AiFillEdit/>
          <h5>Illustrations &#38; Graphics</h5>
          <ul>
            <li>Art &#38; Illustrations</li>
            <hr/>
            <li>Character Design</li>
            <hr/>
            <li>Print Design</li>
            <hr/>
            <li>Corporate Designs</li>
            <hr/>
            <li>Infographics</li>
          </ul>
        </div>

        <div className='ace__services-list__item'>
          <AiOutlineCode/>
          <h5>Web Design &#38; Development</h5>
          <ul>
            <li>UI/UX</li>
            <hr/>
            <li>Portfolio Website</li>
            <hr/>
            <li>Business Website</li>
            <hr/>
            <li>E-Commerce Website</li>
            <hr/>
            <li>Blog and Forum Website</li>
          </ul>
        </div>

        <div className='ace__services-list__item'>
          <AiOutlineVideoCameraAdd/>
          <h5>Animations &#38; Video Editing</h5>
          <ul>
            <li>Character Animation</li>
            <hr/>
            <li>Video Adverts</li>
            <hr/>
            <li>Video Presentations</li>
            <hr/>
            <li>Film Editing</li>
            <hr/>
            <li>Instructional Videos</li>
          </ul>
        </div>

        

      </div>



    </div>
  )
}

export default Services