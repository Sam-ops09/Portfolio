import React, { useEffect, useState } from 'react';
import { AppWrap } from '../../wrapper';
import './Header.scss';
import ReactTypingEffect from 'react-typing-effect';


const Header = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartTyping(true);
    }, 0); // Adjust the delay as needed
  }, []);
  

  return (
    <div className="app__header app__flex">
      <div className='app__header-badge'>
        <div>
          <p className='head-text title-text'>Welcome to my portfolio</p>
          <div className='head-text bigger-text'>My Name is Samanyu B Rao</div>
          <p className='head-text title-text'>a {startTyping && (
              <ReactTypingEffect
                className='head-text title-text'
                text={["FullStack Web Developer", "Machine learning and artificial intelligence enthusiast", "Guitarist"]}
                speed={10}
                eraseSpeed={15}
                cursorRenderer={cursor => <p>{cursor}</p>}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header, 'home');
