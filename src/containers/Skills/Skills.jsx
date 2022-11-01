import React from 'react';
import './Skills.css';
import { Heading } from '../../components';
import {Brand} from '../../components/index';
import { Autodesk, Bootstrap, CharacterAnimator, Css3, Figma, Html5, Illustrator, Indesign, MicrosoftOffice, Photoshop, PHP, PremierePro, ReactApp, Wordpress, Xd } from '../../assets';
import CountUp from 'react-countup';


const Skills = () => {
  
  return (
    <div className="ace__skills section__padding reveal" id='skills'>
      <Heading title="My Skills" sub="Experiences over the years"/>
      <div className="ace__skills-brand">
        <Brand imgUrl={Illustrator} brand="Adobe Illustrator"/>
        <Brand imgUrl={CharacterAnimator} brand="Adobe Character Animator"/>
        <Brand imgUrl={Photoshop} brand="Adobe Photoshop"/>
        <Brand imgUrl={Indesign} brand="Adobe Indesign"/>
        <Brand imgUrl={PremierePro} brand="Adobe Premiere Pro"/>
        <Brand imgUrl={Figma} brand="Figma"/>
        <Brand imgUrl={Xd} brand="Adobe XD"/>
        <Brand imgUrl={Html5} brand="HTML 5"/>
        <Brand imgUrl={Css3} brand="CCS3"/>
        <Brand imgUrl={ReactApp} brand="React App"/>
        <Brand imgUrl={Bootstrap} brand="Bootstrap"/>
        <Brand imgUrl={PHP} brand="PHP"/>
        <Brand imgUrl={Wordpress} brand="Wordpress"/>
        <Brand imgUrl={MicrosoftOffice} brand="Microsoft Office"/>
        <Brand imgUrl={Autodesk} brand="Autodesk AutoCAD"/>
        <Brand imgUrl={Autodesk} brand="Autodesk Revit"/>
      </div>

      <div className='ace__skills-bar'>
        <div className='ace__skills-bar__items'>
          <h5><CountUp end='95' duration={10} suffix='+' enableScrollSpy={true} /></h5>
          <p>Happy Clients</p>
          <vr/>
        </div>
        <div className='ace__skills-bar__items'>
          <h5><CountUp end='210' duration={10} suffix='+' enableScrollSpy={true} /></h5>
          <p>Projects Completed</p>
        </div>
        <div className='ace__skills-bar__items'>
          <h5><CountUp end='53' duration={10} suffix='+' enableScrollSpy={true} /></h5>
          <p>Brands</p>
        </div>

      </div>
    </div>
  )
}

export default Skills