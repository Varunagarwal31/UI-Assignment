import React from 'react';
import './Header.css';
import { LiaFlagUsaSolid } from "react-icons/lia";
import { BsBell } from "react-icons/bs";
import imageIcon from './images/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png'

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ampleLogic</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="orgDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Organization
              </a>
              <ul className="dropdown-menu" aria-labelledby="orgDropdown">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
                <li><a className="dropdown-item" href="#">Option 3</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="configDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Configurations
              </a>
              <ul className="dropdown-menu" aria-labelledby="configDropdown">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
                <li><a className="dropdown-item" href="#">Option 3</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="reportsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reports
              </a>
              <ul className="dropdown-menu" aria-labelledby="reportsDropdown">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
                <li><a className="dropdown-item" href="#">Option 3</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="etlDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ETL
              </a>
              <ul className="dropdown-menu" aria-labelledby="etlDropdown">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
                <li><a className="dropdown-item" href="#">Option 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="icons">
          <span className="icon">
           <LiaFlagUsaSolid/>
          </span>
          <span className="icon">
            <BsBell/>
          </span>
          <span className="icon">
            <image className='imageIcon' src={imageIcon} alt="imageIcon"/>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
