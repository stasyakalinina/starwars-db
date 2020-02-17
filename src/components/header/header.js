import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <a href="#">Star DB</a>
        </h1>
      <ul className="header__menu">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;