// NavBar.js

import { NavLink } from 'react-router-dom';
import '../index.css';
import logo from '../jl-logo-pink.png';

const Navbar = () => (
  <div className="header">
    <div className="logo-title">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="header-title">
        Phone App
      </h1>
    </div>
    <div className="menu">
      <ul>
        <li>
          {' '}
          <NavLink to="/">Brands</NavLink>
          {' '}
        </li>
        <span>|</span>
        <li>
          {' '}
          <NavLink to="/phones">Phones</NavLink>
          {' '}
        </li>
        <span>|</span>
        <li>
          {' '}
          <NavLink to="/rockets">Rockets</NavLink>
          {' '}
        </li>
      </ul>
    </div>
    <div className="h-line">
      <hr />
    </div>
  </div>
);

export default Navbar;
