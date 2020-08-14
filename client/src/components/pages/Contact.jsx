import React from "react";
import Nav from "../Nav.jsx";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="contact-container">
        <div className="contact-container-border">
          <h1>Contact</h1>
          <hr className="contact-hr" />
          <p>
            Feel free to contact me if you have any questions or just want to
            say hi!
          </p>
          <div className="contact-links">
            <div className="contact-link">
              <a
              href="https://github.com/AnnaTDinh/"
              className="banner__icon"
              target="_blank"
              rel="noreferrer"
              aria-label="open github"
            >
              <svg className="contact-link__image" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 54 54">
                      <title>GitHub</title>
                      <circle cx="27" cy="27" r="26.5" stroke-miterlimit="10" stroke-width="0.75"></circle>
                      <path d="M27,10.61a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68A3.47,3.47,0,0,0,23,36.28a3.48,3.48,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8.05a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67a5.85,5.85,0,0,1,.16,4.31,6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,27,10.61Z" stroke-miterlimit="10" stroke-width="0.75" fill-rule="evenodd"></path>
                    </svg>
              <div className="contact-link-title">GitHub</div>
              <div className="contact-link-description">See more projects</div>
            </a>
            </div>
            <div className="contact-link">
              <a
              href="https://www.linkedin.com/in/anna-t-dinh/"
              className="banner__icon"
              target="_blank"
              rel="noreferrer"
              aria-label="open linkedin"
            >
              <svg className="contact-link__image" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 54 54">
                <circle cx="27" cy="27" r="26.5"  stroke-miterlimit="10" stroke-width="0.75"></circle>
                <path d="M37.22,15H16.77A1.75,1.75,0,0,0,15,16.73V37.27A1.75,1.75,0,0,0,16.77,39H37.22A1.76,1.76,0,0,0,39,37.27V16.73A1.76,1.76,0,0,0,37.22,15ZM22.12,35.45H18.56V24h3.56Zm-1.78-13a2.06,2.06,0,1,1,2.06-2.06A2.06,2.06,0,0,1,20.34,22.43Zm15.11,13H31.89V29.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.67H24.35V24h3.41v1.56h0a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46Z" stroke-miterlimit="10" stroke-width="0.75"></path>
              </svg>
              <div className="contact-link-title">LinkedIn</div>
              <div className="contact-link-description">See work experience</div>
            </a>
            </div>
            <div className="contact-link">
              <a
              href="mailto:annathuydinh@gmail.com"
              className="banner__icon"
              aria-label="send me an email"
            >
              <svg className="contact-link__image" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 54 54">
                <circle cx="27" cy="27" r="26.5" stroke-miterlimit="10" stroke-width="0.75"></circle>
                      <path d="M37.6,16.4H16.4a2.65,2.65,0,0,0-2.64,2.65V35A2.66,2.66,0,0,0,16.4,37.6H37.6A2.66,2.66,0,0,0,40.25,35V19.05A2.66,2.66,0,0,0,37.6,16.4Z"  stroke-miterlimit="10" stroke-width="0.75"></path>
                      <polygon points="37.6 21.7 27 28.32 16.4 21.7 16.4 19.05 27 25.68 37.6 19.05 37.6 21.7" stroke-miterlimit="10" stroke-width="0.75"></polygon>
                    </svg>
              <div className="contact-link-title">Email</div>
              <div className="contact-link-description">Annathuydinh@gmail.com</div>
            </a>
            </div>
            
          </div>

          {/* insert linked in and github svg with redirects */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
