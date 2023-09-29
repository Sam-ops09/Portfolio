import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message} = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setisFormSubmitted(true);
        setLoading(false);
      })
  };

  return (
    <>
      <h2 className='head-text'><span>Contact or Query</span></h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:samanyu48@gmail.com' className='p-text'>samanyu48@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel: +91 9900025186' className='p-text'>+91-9900025186</a>
        </div>
      </div>
    {!isFormSubmitted?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='contact-text' type='text' placeholder='Your name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='contact-text' type='email' placeholder='Your email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
          className='contact-text' 
          placeholder='Your message' 
          name='message' 
          value={message} 
          onChange={handleChangeInput} 
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending': 'Send Message'} </button>
      </div>
      : <div>
          <h3 className='head-text'>
            Thankyou for getting in touch!
          </h3>
      </div>
      }
        {/* <div className="copyright">
          <p className="p-text">@2020 SAMANYU</p>
          <p className="p-text">All rights reserved</p>
        </div> */}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);