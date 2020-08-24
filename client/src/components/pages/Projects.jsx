import React, { useEffect } from "react";
import Nav from "../Nav.jsx";
import gsap from "gsap";

const Projects = () => {

  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible"}});

    const tl = gsap.timeline({
      delay: 0.5
    });
    tl.fromTo('.Project', {opacity: 0, y: 200}, {opacity: 1, y: 0})
    .fromTo('.Project-title-right', {opacity: 0, x: 200}, {opacity: 1, x: 0})
    .fromTo('.Project-title-left', {opacity: 0, x: -200}, {opacity: 1, x: 0});
  }, []);

  return (
    <div>
      <Nav />
      <div className="Projects">
        <div className="Project-container">
          <div className="Main-project-title">My Recent Projects</div>
          <hr className="project-hr" />
          <div className="Project">
            <div className="Project-image-container">
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/Portfolio+website.jpg"
                alt="Portfolio Website"
              ></img>
            </div>
            <div className="Project-text-container">
              <div className="Project-title Project-title-right">
                <a
                  href="https://github.com/AnnaTDinh/portfolio/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="open github"
                >
                  Portfolio
                </a>
              </div>
              <div className="Project-description">
                A responsive portfolio website showcasing my resume, projects,
                technical skills, and contact information
              </div>
              <div className="Project-tech">
                <p>CSS | JavaScript | GSAP | React | Webpack</p>
              </div>
            </div>
          </div>
          <div className="Project Project-left">
            <div className="Project-image-container Project-image-screenshots-container">
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-23+at+8.05.08+PM.jpg"
                alt="Blue Checks application screenshot"
              ></img>
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-23+at+8.05.41+PM.jpg"
                alt="Blue Checks application screenshot"
              ></img>
            </div>
            <div className="Project-text-container">
              <div className="Project-title Project-title-left">
                Blue Checks
              </div>
              <div className="Project-description">
                A mobile application designed to allow users to create reviews
              </div>
              <div className="Project-tech">
                <p>
                  React Native | Axios | Expo | Node.js | Firebase Realtime
                  Database
                </p>
              </div>
            </div>
          </div>
          <div className="Project">
            <div className="Project-image-container">
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/2+servers+10k+rps+11ms+0%25+error.jpg"
                alt="2 servers 10k rps"
              ></img>
            </div>
            <div className="Project-text-container">
              <div className="Project-title Project-title-right">
              <a
                  href="https://github.com/FENTY-JACD/navbar/tree/postgres"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="open github"
                >Fenty Beauty Navbar</a></div>
              <div className="Project-description">
                A web-scale system design that was horizontally scaled using 2 servers, a load balancer, a reverse proxy, and caching to handle 10k rps in 11ms without any errors
              </div>
              <div className="Project-tech">
                <p>
                  PostgresSQL | AWS | Ubuntu | Artillery | Loader.io | NGINX |
                  React
                </p>
              </div>
            </div>
          </div>
          <div className="Project Project-left">
            <div className="Project-image-container">
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/Lululemon.jpg"
                alt="Lululemon Clone Website"
              ></img>
            </div>
            <div className="Project-text-container">
              <div className="Project-title Project-title-left">
              <a
                  href="https://github.com/JJACD/main-product-component"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="open github"
                >Lululemon PDP</a></div>
              <div className="Project-description">
                A clone of Lululemon's product display page
              </div>
              <div className="Project-tech">
                <ul>
                  <p>React | Express | Mysql | Axios | Node.js | Webpack</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
