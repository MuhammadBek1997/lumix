import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <span className="navbar__brand"><b>LUNIX</b> companies</span>
          <span className="navbar__location">Uzbekistan</span>
        </div>
        <ul className="navbar__menu">
          <li>Главный</li>
          <li>О нас</li>
          <li>Команда</li>
          <li>Услуги</li>
          <li>Цены</li>
          <li>Связаться с нами</li>
        </ul>
        <div className="navbar__lang">
          <span>O'zbekcha</span>
          <span>Русский</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
