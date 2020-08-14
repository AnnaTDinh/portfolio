import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <p className="Name">Anna Dinh</p>
      <nav>
        <ul className="Paths">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/technical">Technical Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      
      
      
      
    </div>
  )
}

export default Nav;