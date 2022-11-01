import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Heading, BrandSmall} from '../../components';
import {Email, Whatsapp, Phone, Instagram} from '../../assets';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yrpq5ct', 'aceform', form.current, 'myVxudrCPAqLk_uIw')
      .then((result) => {
          console.log(result.text);
          toast.success('Message was sent succesfully')
      }, (error) => {
          console.log(error.text);
          toast.error(error.text)
      });

      document.getElementById("form").reset();
    }

  

  return (
    <div className='section__padding reveal' id='contact'>
      
      <Heading title="Contact Me" sub="I Typically Respond Quick"/>

      <div className='ace__contact-content'>

        <div className='ace__contact-content__social'>
          <h4>My Contact Details</h4>
          <a href="tel:+44 7468 229936" target="_blank" rel="noopener noreferrer"><BrandSmall brand="+44 7468 229936" imgUrl={Phone}/></a>
          <a href="https://wa.me/2348179404530" target="_blank" rel="noopener noreferrer"><BrandSmall brand="+234 817 940 4530" imgUrl={Whatsapp}/></a>
          <a href="mailto:adigunsamuel84@gmail.com" target="_blank" rel="noopener noreferrer"><BrandSmall brand="adigunsamuel84@gmail.com" imgUrl={Email}/></a>
          <a href="mailto:acedesignsbymide@gmail.com" target="_blank" rel="noopener noreferrer"><BrandSmall brand="ace.designs.by.mide@gmail.com" imgUrl={Email}/></a>
          <a href="https://www.instagram.com/ace_designs_by_mide/" target="_blank" rel="noopener noreferrer"><BrandSmall brand="@acedesignsbymide" imgUrl={Instagram}/></a>
        </div>


        <form  ref={form} onSubmit={sendEmail} className='ace__contact-content__form' id='form'>
     
     <div >
          <h4>Send me a Message</h4>
        </div> 
      

      <div className="ace__contact-content__form-field">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className=""
          required
        />
      </div>
      <div className="ace__contact-content__form-field">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=""
          required
        />
      </div>
      <div className="ace__contact-content__form-field">
        <textarea
          placeholder="Your message"
          name="message"
          className=""
          required
        />
      </div>
      <div className="ace__contact-content__form-field">
        <button
          className=""
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>

        
      </div>
      


      </div>
  )
}

export default Contact;