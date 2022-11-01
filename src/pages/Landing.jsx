import React from 'react'
import { ToastContainer } from 'react-toastify';
import {About, Contact, Footer, Header, Home, Services, Skills, Work } from '../containers';



const Landing = () => {
  return (
    <div className="ace__bg">

        <div >
          <Header />
          <Home />
          <ToastContainer/>
        </div>
        <About />
        <Services />
        <Skills />
        <Work />
        <Contact />
        <Footer />

    </div>
  )
}

export default Landing