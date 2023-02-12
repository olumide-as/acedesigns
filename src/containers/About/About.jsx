import React from 'react';
import './About.css';
import { Heading, BrandSmall} from '../../components';
import {Github, Instagram, LinkedIn, Twitter} from '../../assets';


const About = () => {

  return (
    
    <div className='ace__about section__padding reveal' id="about">
      
      <Heading title="ABOUT ME" sub="My Brief Story"/>

      <div className="ace__about-content">
        
      <div className="ace__about-text">
        <p>
        Adigun Olumide Samuel is a structural engineer, a design enthusiat, loves great music and believes there’s a future in the blockchain. He is awesome at Illustrations and Graphic Design,  Frontend Design, a spice of Backend Design, Video Editing and Animation, Structural Engineering Design, Architectural Design and Microsoft Suite Design.
        </p>
        <p>
        He is currently studying at Nottingham,England and works as a freelance designer at a website that renders design products and services.
        </p>
        <p>
        Subsequently, he's constantly working to be a better designer in all necessary areas and expand his horizon.
        </p>
      </div>

      <div className='ace__about-social'>
      <h4>Follow me on Social Media</h4>
      <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><BrandSmall brand="@olumide_as" imgUrl={Instagram}/></a>
      <a href="https://twitter.com/olumide_as" target="_blank" rel="noopener noreferrer"><BrandSmall brand="@olumide_as" imgUrl={Twitter}/></a>
      <a href="https://github.com/olumide-as" target="_blank" rel="noopener noreferrer"><BrandSmall brand="@olumide-as" imgUrl={Github}/></a>
      <a href="https://www.linkedin.com/in/olumide-as/" target="_blank" rel="noopener noreferrer"><BrandSmall brand="Adigun Olumide Samuel" imgUrl={LinkedIn}/></a>
      </div>

      </div>

    </div>

  )
}

export default About