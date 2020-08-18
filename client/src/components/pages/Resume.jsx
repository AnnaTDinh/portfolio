// have resume
// have a link to download

import React from 'react';
import Nav from '../Nav.jsx';

const Resume = () => {
  return (
    <div className="Resume-page">
      <Nav/>
      <div className="resume-container">
        <article className="main-resume">
          <div className="technical-skills">
            <div className="title">
              <h3>Technical Skills</h3>
              <hr/>
            </div>
            <article className="technical-skills-container">
              <header>
                <h4 className="languages">
                  Languages
                </h4>
                <p className="technical-description">
                  HTML, CSS, JavaScript
                </p>
              </header>
            </article>
            <article className="technical-skills-container">
              <header>
                <h4 className="Technologies/Frameworks">
                  Technologies/Frameworks
                </h4>
                <p className="technical-description">
                  Node.js, Express, Slack, Bootstrap, React, MySQL, PostgreSQL, MongoDB, Git, Postman, Mongoose, Axios, Expo, Firebase, React Native, Trello, Loader.io, K6, Artillery.io, Nginx, AWS
                </p>
              </header>
            </article>
          </div>
          <div className="applications">
          <div className="title">
            <h3>Applications</h3>
            <hr/>
          </div>
          <article class="applications-container">
            <header>
            <div className="container">
              <p><strong>Blue Checks</strong></p>
              <p>React Native | Axios | Expo | Node.js | Firebase Realtime Database </p>
              </div>
              <p>
                Mobile application for users to connect to one another and review police officers
              </p>
              <ul>
                <li>Collaborated with a team of engineers and deployed a minimum viable product within a strict deadline</li>
                <li>Authenticated users by integrating FirebaseUI Auth to the Login and Register screen</li>
                <li>Implemented a search feature that allows users to search for cops by name within a state, city, zip code, or map view</li>
              </ul>
            </header>
          </article>
          <article class="applications-container">
            <header>
            <div className="container">
              <p><strong>Fenty Beauty Nav-Bar</strong></p>
              <p>PostgresSQL | AWS | Ubuntu | Artillery | Loader.io | NGINX | React</p>
              </div>
              <p>
                Web-scale system design of an existing product's navbar search feature
              </p>
              <ul>
                <li>Inherited legacy code and from 100 datasets, 10 million records were generated and benchmarked single queries, resulting in a response of 3ms for MongoDB and 0.69ms for PostgreSQL</li>
                <li>Horizontally scaled using NGINX as a reverse proxy and Round Robin load balance to initially run one server, resulting in 1,000 rps, 0% error rate, and 27ms average response time to two EC2 instancing resulting in 3,125rps, 0% error rate, and 16ms</li>
                <li>Optimized performance and stress tested two servers resulting in 10,000rps, 0% error rate, and 11ms by caching and indexing the database</li>
              </ul>
            </header>
          </article>
          <article class="applications-container">
            <header>
            <div className="container">
              <p><strong>Product Display Page Clone</strong></p>
              <p>React | Express | Mysql | Axios | Node | Git | Webpack</p>
            </div>
              <p>
                Replica of Lululemon's main product display page and add to cart feature
              </p>
              <ul>
                <li>Cooperated with a team of engineers in an agile evnironment to develop a dynamic product display page</li>
                <li>Delivered application in a time-sensitive environment while maintaining functionality and user experience</li>
                <li>Implemented service oriented architecture with hundreds of realistic products</li>
              </ul>
            </header>
          </article>
        </div>
        <div className="Education">
          <div className="title">
            <h3>Education</h3>
            <hr/>
          </div>
          <article className="education-container">
            <header>
              <div className="small-container">
              <h4 className="education">Full Stack Engineering Immersive</h4><p>2020</p>
              </div>
              <p className="school">Hack Reactor, Galvanize</p>
              
            </header>
          </article>
          <article className="education-container">
            <header>
            <div className="small-container">
              <h4 className="education">B.A. in Psychology and Social Behavior</h4><p>2016 - 2018</p>
              </div>
              <p className="school">University of California, Irvine </p>
              
            </header>
          </article>
        </div>
        <div className="Volunteer">
          <div className="title">
            <h3>Volunteer</h3>
            <hr/>
          </div>
          <article className="volunteer-container">
            <header>
            <div className="small-container">
              <h4 className="volunteer">West Covina Healthcare Center</h4>
              <p className="volunteer-year">Nov 2018 - Aug 2019</p>
              </div>
              <ul>
                <li>
                Implemented strengthening exercises and occupation-based interventions to patients                
                </li>
              </ul>
            </header>
          </article>
          <article className="volunteer-container">
            <header>
              <div className="small-container">
              <h4 className="volunteer">Karate For All</h4>
              <p className="volunteer-year">Feb 2018 - Jun 2018</p>
              </div>
              
              <ul>
                <li>
                Incorporated OT and martial arts to build confidence, social skills, and fine motor skills
                </li>
              </ul>
            </header>
          </article>
        </div>
        </article>
    </div>
    </div>
  )
}

export default Resume;