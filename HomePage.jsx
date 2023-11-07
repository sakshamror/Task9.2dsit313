import React from 'react';
import './HomePage.css';
import {Outlet, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header className="header">
        <h2 className="logo">DEV@DEAKIN</h2>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="options">
            <Link to='/postform'>
          <button className="option">POST</button>
          </Link>
          <Link to="/login">
           <button className="option"> LOGIN</button>
          </Link>
          <Outlet/>
        </div>
      </header>
    </div>
  );
}

export default HomePage;