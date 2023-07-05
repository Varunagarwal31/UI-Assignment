import React from 'react';
import './Footer.css';


const Footer = () => {
  

  return (
    <React.Fragment>
        <footer className="footer">
        <div className="logo">ampleLogic</div>
        <div className="middle">
          <span className="copyright">
          Copyrights &copy; 2010-2023 AmpleLogic | All Rights Reserved.
          </span>
        </div>
        <div className='version'>v3.1.0</div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
