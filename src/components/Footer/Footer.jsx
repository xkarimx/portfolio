import React from 'react';
import './Footer.css';
import Github from '../../img/github-violet.png';
import Linkedin from '../../img/linkedin-violet.png';

function Footer() {
  const openNewWindow = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='footer'>
      <button className='btn-footer' onClick={() => openNewWindow('https://github.com/xkarimx')}>
        <img src={Github} alt="Github" />
      </button>
      <button className='btn-footer' onClick={() => openNewWindow('https://www.linkedin.com/in/karen-perez-987000248/')}>
        <img src={Linkedin} alt="LinkedIn" />
      </button>
    </div>
  );
}

export default Footer;
