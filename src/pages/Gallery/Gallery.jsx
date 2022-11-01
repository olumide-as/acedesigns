import React, { useState } from 'react';
import './Gallery.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/ace-light.svg';
import { Footer } from '../../containers';
import {cd1, cd2, cd3, cd4, cd5, cd6, cd7, cd8, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12} from '../../assets'
import {Portfolio, Youtube, Heading} from '../../components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';





const MenuGallery = () => (
  <>
    <a href="/#home">Home</a>
    <a href="/#contact">Contact</a>
  </>
)

const Gallery = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);

  return (
  <div className="ace__bg section__padding">

    
    <div className="ace__navbar">
      <img src={logo} alt="logo" />

    
      <div className="ace__navbar-links">
        <MenuGallery/>
      </div>

      <div className="ace__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#ffff" size={24} onClick={() => SetToggleMenu(false)}/>
          : <RiMenu3Line color="#ffff" size={24} onClick={() => SetToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="ace__navbar-menu__container scale-up-tr">
            <div className="ace__navbar-menu__container-links">
            <MenuGallery />
            </div>
          </div>
        )
        }
      </div>
    </div>

    <div className='ace__gallery '>
      <Heading title="My Works" sub="Gallery"/>
    </div>


   <Tabs>
    <TabList>
      <Tab><p>Arts &amp; Illustrations</p></Tab>
      <Tab><p>Corporate Designs</p></Tab>
      <Tab><p>Videos &amp; Animations</p></Tab>
      <Tab><p>Web Development</p></Tab>
    </TabList>

    <TabPanel>
      <div className="ace__gallery-portfolio">
      <Portfolio imgUrl={i1} title='Ape NFT'/>
      <Portfolio imgUrl={i2} title='Bulls NFT'/>
      <Portfolio imgUrl={i3} title='Pixel Ape NFT'/>
      <Portfolio imgUrl={i4} title='Bees NFT'/>
      <Portfolio imgUrl={i5} title='Cats NFT'/>
      <Portfolio imgUrl={i6} title='Bears NFT'/>
      <Portfolio imgUrl={i7} title='Lonely Together NFT'/>
      <Portfolio imgUrl={i8} title='Ninja coin'/>
      <Portfolio imgUrl={i9} title='Orbital Apes'/>
      <Portfolio imgUrl={i10} title='Samoyed coin'/>
      <Portfolio imgUrl={i11} title='Samo Inu coin'/>
      <Portfolio imgUrl={i12} title='Bored Banana NFT'/>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="ace__gallery-portfolio">
      <Portfolio imgUrl={cd1} title='Thanksgiving Soiree'/>
      <Portfolio imgUrl={cd2} title='Avalanche of Praise'/>
      <Portfolio imgUrl={cd3} title='Psalmist Praise'/>
      <Portfolio imgUrl={cd4} title='Bakerrs 22'/>
      <Portfolio imgUrl={cd5} title='A Good Tidings'/>
      <Portfolio imgUrl={cd6} title='Valentine Special'/>
      <Portfolio imgUrl={cd7} title='Psalmist Praise'/>
      <Portfolio imgUrl={cd8} title='Soup &amp; Stew Menu'/>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="ace__gallery-portfolio">
      <Youtube embedId="XGoKajQRcCU" title='Llama - NFT Project' url='#'/>
      <Youtube embedId="PveILHnr1jA" title='Aswang - NFT Project' url='#'/>
      <Youtube embedId="gd85YLDmsKg" title='BedBugs - NFT Project' url='#'/>
      <Youtube embedId="a57CSInXKk8" title='Brossette Cabin Construction' url='brossette.com.ng'/>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="ace__gallery-portfolio">
      <Youtube embedId="Be3QCZPHnlw" title='Brossette Nigeria Limited' url='brossette.com.ng'/>
      <Youtube embedId="JS32ecH3i4k" title='Truesouth Consulting' url='truesouthconsulting.com'/>
      <Youtube embedId="8Lfm2Cm6uns" title='Tishé Style' url='tishestyle.com'/>
      <Youtube embedId="ofIHJjEePJE" title='Quadloop' url='quadloop.africa'/>
      <Youtube embedId="d-vaRhPxyYA" title='Michael Angelo Media Limited' url='ma-media.com.ng'/>
      <Youtube embedId="5aa2Wzc34HU" title='Infrastructure Management Express' url='imeassets.com'/>
      <Youtube embedId="_0EYRHkK7AY" title='Dubai Gift Boxes' url='dubaigiftboxes.com'/>
      <Youtube embedId="cmZwIDvKlhA" title='Akande &amp; Akande Chambers' url='akandeandakandechambers.com'/>
      <Youtube embedId="N-00zjHB1hU" title='Agroterra Resort and Golf Course' url='#'/>
      <Youtube embedId="Zp1qd_NTNY0" title='NuTech Contracting' url='#'/>
      <Youtube embedId="s0zYgSKdkXw" title='Extrude Solutions' url='extrudesolutions.com'/>
      <Youtube embedId="lW2IkTZRZAU" title='Pay In Seconds Exchange' url='#'/>
      <Youtube embedId="-mxH0DR5lRo" title='Forms and Shapes Integrated' url='#'/>
      <Youtube embedId="XjjkFG0pW4w" title='GMC Nigeria' url='#'/>
      </div>
    </TabPanel>
  </Tabs>

  <Footer/>

  </div>
  )
}

export default Gallery