import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      Navbar
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/technical">Technical Skills</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Nav;