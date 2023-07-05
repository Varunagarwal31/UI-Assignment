import React, { useState } from 'react';
import './MigrationPopup.css'; // Import custom CSS file for additional styling
import { VscCheck } from "react-icons/vsc";
import Footer from './Footer';
import './Footer.css'
import { TbArrowBadgeUp, TbArrowBadgeDown } from "react-icons/tb";

const MigrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showBtn, setShowBtn] = useState(true)
  const [showFooter, setShowFooter] = useState(true)
  const [icon, setIcon] = useState(true)

  const handleClose = () => {
    setShowAlert(false)
  }

  const handleStart = () => {
    setShowPopup(true);
    setProgress(0);
    setShowBtn(false);
    setShowFooter(false)
    setIcon(false)

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          setShowPopup(false);
          setShowAlert(true);
          setShowFooter(true)
          setIcon(true)
          alert('Migrating process has been completed')
        }
        return newProgress;
      });
    }, 500);
  };

  const handleDownArrow = () => {
    setShowFooter(true)
    setIcon(true)
    setShowPopup(false)
  }

  const handleUpBtn = () => {
    setShowPopup(true)
    setShowFooter(false)
    setIcon(false)
  }

  return (
    <div className="container">
      {showBtn && <button
        className="btn btn-primary start-button"
        onClick={handleStart}
      >
        Start
      </button>}
      
   {icon  ?
        <div className='arrow-button'>
           <button className='arrowUp' onClick={handleUpBtn}><TbArrowBadgeUp/></button> 
        </div> :
        <div className='arrow-button'>
            <button className='arrowDown' onClick={handleDownArrow}><TbArrowBadgeDown/></button>
        </div>}
      {showPopup && (
        <div className="offcanvas-popup">
          <div className="offcanvas-content">
            <div className='popupContent'>Migrating Data to selected environment</div>
            <span className="progress-text">{`${progress}%`}</span>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              >
              </div>
            </div>
          </div>
        </div>
      )}
      {showAlert && (
        <div className="alert">
          <div className='iconClass'>
            <button className='close' onClick={handleClose}>x</button>
          <span className='icon'><VscCheck/></span> 
          </div>
            <div className='contentClass'>
              <span>Success</span>
              <span>Migration applied succssfully.</span>
           </div>
        </div>
      )}
      {showFooter && <Footer/>}
    </div>
  );
};

export default MigrationPopup;
