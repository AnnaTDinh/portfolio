import React, { useEffect } from "react";
import Nav from "../Nav.jsx";
import gsap from "gsap";
import IntroOverlay from "../IntroOverlay.jsx";



const MainPage = () => {
  // const tl = gsap.timeline();
  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible"}});

    const tl = gsap.timeline({
      delay: 0.5
    });

    tl
    .to('.overlay-top', 1.5, {height: 0, ease: 'expo.inOut', stagger: 0.4})
    .fromTo('.banner-quote .line' , 1, {opacity: 0, y: 250}, {opacity: 1, y: 0})
    .fromTo('.banner-quote .line-2' , 1, {opacity: 0, y: 250}, {opacity: 1, y: 0})
    .fromTo('.banner-name', 1, {opacity: 0, x: -100}, {opacity: 1, x: 0})
    .fromTo('.banner-developer', 1, {opacity: 0, x: -100}, {opacity: 1, x: 0})
    .fromTo('.Nav-container', 1, {opacity: 0, y: -100}, {opacity: 1, y: 0});

  }, []);

  return (
    <div className="Mainpage">
      <IntroOverlay/>
      <Nav />
      <div className="main-page-content">
        <section>
        <div className="banner-text">
          <div className="banner-intro">
            <div className="line banner-name">
              Hi, I'm <span>Anna Dinh</span>
            </div>
          </div>
          <div className="banner-quote">
            <h1>
              <div className="line">
                I <span>create </span>
              </div>
              <div className="line-2">meaningful applications</div>
            </h1>
          </div>
          <div className="banner-developer">
            <div className="line">
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
        </section>

      </div>
    </div>
  );
};

export default MainPage;
