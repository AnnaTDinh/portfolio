import React from 'react';
import Nav from '../Nav.jsx';

const MainPage = () => {
  return (
    <div>
      <Nav/>
      <div className="about-container">
        <div className="about-image-container">
          <img src="https://anna-portfolio.s3.us-east-2.amazonaws.com/FCF339C7-2DFE-4609-9234-4C645CDF5110_1_105_c.jpeg" alt="Anna" ></img>
        </div>
        <div className="about-description-wrapper">
          <div className="about-description">
            <h1>Hi there! My name is <span className="important">Anna Dinh</span>.</h1>
            <p>I am a software engineer based in Los Angeles.</p>
            <p>Before I became a software engineer, I was applying for my masters for Occupational Therapy. 
              It was a great experience that allowed me to make an impact on the lives of others but 
              down the line, I realized it was not for me.</p>
            <p>I set out on a journey to find a path to a career that I would be passionate about, a career that would let me continue 
              making an impact on the lives of others while allowing me to have a creative outlet. 
              When I first started learning how to code, I realized that software engineering was for me.</p>
            <p>On my free time, I like to spend my time playing games, taking care of my plants, watching shows, and hanging out with friends.</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage;