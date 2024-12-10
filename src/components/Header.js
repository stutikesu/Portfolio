
import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1 className="port" style={{ fontSize: '2.4rem', color: '#001eff' }}>STUTI.</h1>
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-text">
          <p className="typing-text"></p>
          <h1 style={{ fontFamily: 'cursive' }}>Hi, I'm <span>Stuti</span><br /> Kesarwani from India</h1>
        </div>
      </div>
    </div>
  );
};

function openMenu() {
  document.getElementById("sidemenu").style.right = "0";
}

function closeMenu() {
  document.getElementById("sidemenu").style.right = "-200px";
}

export default Header;
