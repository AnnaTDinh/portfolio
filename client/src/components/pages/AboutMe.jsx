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
            <p>I am passionate about designing meaningful applications that make an impact to others. 
              I was always fascinated to understand how structures are made. I vividly 
              remember spending time arranging K'NEX pieces to design structures and as 
              I grew older, I have applied my problem-solving skills into building, taking 
              apart, and fixing machines. </p>
            <p>On my free time, I like to spend my time playing games, taking care of my plants, watching shows, and hanging out with friends.</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage;