import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <a href='https://www.linkedin.com/in/samanyu-b-rao-9598021bb/' target='_blank' rel='noopener noreferrer'>
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href='https://www.instagram.com/samanyu_b_rao/' target='_blank' rel='noopener noreferrer'>
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href='mailto:samanyu48@gmail.com'>
      <div>
        <BiLogoGmail />
      </div>
    </a>
    <a href='https://github.com/Sam-ops09' target='_blank' rel='noopener noreferrer'>
      <div>
        <FaGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;