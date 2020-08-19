import React from "react";
import Nav from "../Nav.jsx";
const Projects = () => {
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
              <div className="Project-title">
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
                A responsive portfolio website showcasing my resume, projects, technical skills, and contact information
              </div>
              <div className="Project-tech">
                <p>CSS | JavaScript | Node.js | React | Webpack</p>
              </div>
            </div>
          </div>
          <div className="Project Project-left">
            <div className="Project-image-container">
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/Portfolio+website.jpg"
                alt="Portfolio Website"
              ></img>
            </div>
            <div className="Project-text-container">
              <div className="Project-title">Blue Checks</div>
              <div className="Project-description">A mobile application designed to allow users to create reviews</div>
              <div className="Project-tech">
              <p>React Native | Axios | Expo | Node.js | Firebase Realtime Database </p>
              </div>
            </div>
          </div>
          <div className="Project">
            <div className="Project-image-container">
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/Portfolio+website.jpg"
                alt="Portfolio Website"
              ></img>
            </div>
            <div className="Project-text-container">
              <div className="Project-title">Fenty Beauty Navbar</div>
              <div className="Project-description">A web-scale system design of an existing application's navigation bar</div>
              <div className="Project-tech">
                <p>PostgresSQL | AWS | Ubuntu | Artillery | Loader.io | NGINX | React</p>
              </div>
            </div>
          </div>
          <div className="Project Project-left">
            <div className="Project-image-container">
              <img
                src="https://anna-portfolio.s3.us-east-2.amazonaws.com/Portfolio+website.jpg"
                alt="Portfolio Website"
              ></img>
            </div>
            <div className="Project-text-container">
              <div className="Project-title">
                Lululemon PDP
              </div>
              <div className="Project-description">A clone of Lululemon's product display page</div>
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
