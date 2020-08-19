import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav-container">
      <div className="Nav">
        <div className="Name-container">
          <p className="Name"><Link to="/">&lt;Anna Dinh /&gt;</Link></p>
        </div>
          <ul className="Paths">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/technical">Technical Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
      <hr/>
    </div>
  )
}

export default Nav;