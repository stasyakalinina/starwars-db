import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Star DB</Link>
        </h1>
      <ul className="header__menu">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </ul>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onServiceChange}>
        Change Service
      </button>
    </header>
  );
}

export default Header;