// have resume
// have a link to download

import React from 'react';
import Nav from '../Nav.jsx';

const Resume = () => {
  return (
    <div>
      <Nav/>
      <div className="resume-container">
        <article>
          <header>
          <div className="title">
            <h2>Resume</h2>
          </div>
          </header>
          <div className="technicalSkills">
            <div className="title">
              <h3>Technical Skills</h3>
            </div>
            <article className="technical-skills-container">
              <header>
                <h4 className="languages">
                  Languages
                </h4>
                <p>
                  HTML, CSS, JavaScript
                </p>
              </header>
            </article>
            <article className="technical-skills-container">
              <header>
                <h4 className="Technologies/Frameworks">
                  Technologies/Frameworks
                </h4>
                <p>
                  Node.js, Express, Slack, Bootstrap, React, MySQL, PostgreSQL, MongoDB, Git, Postman, Mongoose, Axios, Expo, Firebase, React Native, Trello, Loader.io, K6, Artillery.io, NGINX, AWS
                </p>
              </header>
            </article>
          </div>
        </article>
        <div className="applications">
          <div className="title">
            <h3>Applications</h3>
          </div>
          <article class="applications-container">
            <header>
              <h4>Blue Checks</h4>
              <p>React Native | Axios | Expo | Node.js | Firebase Realtime Database </p>
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
              <h4>Fenty Beauty Nav-Bar</h4>
              <p>PostgresSQL | AWS | Ubuntu | Artillery | Loader.io | NGINX | React</p>
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
              <h4>Product Display Page Clone</h4>
              <p>React | Express | Mysql | Axios | Node | Git | Webpack</p>
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
        <div>
          <div className="title">
            <h3>Education</h3>
          </div>
          <article className="education-container">
            <header>
              <h4 className="education">Full Stack Engineering Immersive</h4>
              <p className="school">Hack Reactor, 2020</p>
            </header>
          </article>
          <article className="education-container">
            <header>
              <h4 className="education">B.A. in Psychology and Social Behavior</h4>
              <p className="school">University of California, Irvine, 2016 - 2018</p>
            </header>
          </article>
        </div>
        <div>
          <div className="title">
            <h3>Volunteer</h3>
          </div>
          <article className="volunteer-container">
            <header>
              <h4 className="volunteer">West Covina Healthcare Center</h4>
              <p className="volunteer-year">November 2018 - August 2019</p>
              <ul>
                <li>
                Implemented strengthening exercises and occupation-based interventions to patients under the supervision of an Occupational or Physical Therapist
                </li>
              </ul>
            </header>
          </article>
          <article className="volunteer-container">
            <header>
              <h4 className="volunteer">Karate For All</h4>
              <p className="volunteer-year">February 2018 - June 2018</p>
              <ul>
                <li>
                Incorporated OT and martial arts build confidence, social skills, gross motor skills, strength, and motor planning skills in children with special needs
                </li>
              </ul>
            </header>
          </article>
        </div>
    </div>
    </div>
  )
}

export default Resume;