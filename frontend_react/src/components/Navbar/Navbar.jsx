import React, { useState } from 'react';import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links heading-text">
        {['home', 'about', 'work', 'skills', 'contact', 'Resume'].map((item) => (
          <li className="app__flex heading-text" key={`link-${item}`}>
            <div />
              {item === 'Resume' ? (
                <a
                  href="/pdf/Samanyu-Resume.pdf" target="_blank" rel="noopener noreferrer">

                  {item}
                </a>
              ) : (
                <a href={`#${item}`}>{item}</a>
              )}
          </li>
        ))}
      <p className="p-text">@2020 SAMANYU <br/>All rights reserved</p>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact', 'Resume'].map((item) => (
                <li key={item}>
                  {item === 'Resume' ? (
                    <a href="/pdf/Samanyu-Resume.pdf" target="_blank" rel="noopener noreferrer">
                      {item}
                    </a>
                  ) : (
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <p className="p-text">@2020 SAMANYU</p>
            <p className="p-text">All rights reserved</p>
          </motion.div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;