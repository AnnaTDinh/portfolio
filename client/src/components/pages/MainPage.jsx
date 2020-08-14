import React from 'react';
import Nav from '../Nav.jsx';

const MainPage = () => {
  return (
    <div>
      <Nav/>
      <div className="about-container">
        <div className="about-image">
          <img src="https://anna-portfolio.s3.us-east-2.amazonaws.com/FCF339C7-2DFE-4609-9234-4C645CDF5110_1_105_c.jpeg" alt="Anna" width="500" height="5"></img>
        </div>
        {/* <img>insert picture</img> */}
        <div className="about-description-wrapper">
          <h1>Hi,</h1>
          <p>My name is Anna and I am a <span>full-stack software engineer</span> based in Los Angeles, California. I am passionate about creating meaninful impacts with my code. On my free time, I like to spend my time playing games, taking care of my plants, watching shows, and hanging out with friends.</p>
        </div>
        </div>
    </div>
    // maybe have technical skills here
  )
}

export default MainPage;