import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import './NavBar.css';
import HomePage from './HomePage';

function NavBar() {
  return (
    <div>
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to='/plans'>Plans</Link>
      <Link to="/find-question">Find Question</Link>
      <Outlet/>
    </div>
   
    <HomePage/>
    </div>
  );
}

export default NavBar;