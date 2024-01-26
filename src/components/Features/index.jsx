import React from "react";
import { PiDeviceMobile } from "react-icons/pi";
import { LuStars } from "react-icons/lu";
import { SiReactos } from "react-icons/si";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import "./index.css";

const Features = () => {
  return (
    <div className="features-container">
      <Zoom>
        <div className="features-top-section">
          <h2 className="features-heading">
            A Front-End 😄 developer with a{" "}
            <span className="features-heading-span">design sense</span>.
          </h2>
          <p className="features-description">
            Building websites that look good is the first step, but it's also
            important to make sure your website's code is easy to read and
            maintain.
          </p>
        </div>
      </Zoom>
      <div className="features-bottom-section">
        <Jump>
          <div className="test">
            <div className="feature-icon-container">
              <PiDeviceMobile className="feature-icon" />
            </div>
            <div className="feature-card">
              <h3 className="feature-card-heading">Responsive Design</h3>
              <p className="feature-card-description">
                The world has gone mobile - so why not your website? I
                specialize in responsive web design so you never have to worry
                about your content being seen by customers or users no matter
                what device they're on.
              </p>
            </div>
          </div>
        </Jump>
        <Jump>
          <div className="test">
            <div className="feature-icon-container">
              <LuStars className="feature-icon" />
            </div>
            <div className="feature-card">
              <h3 className="feature-card-heading">Clean Code</h3>
              <p className="feature-card-description">
                I focus on making sure code runs smoothly and efficiently, so
                you can focus on other parts of running your business. Simpler
                code means less maintenance and lower chances of bugs - always a
                win!
              </p>
            </div>
          </div>
        </Jump>
        <Jump>
          <div className="test">
            <div className="feature-icon-container">
              <SiReactos className="feature-icon" />
            </div>
            <div className="feature-card">
              <h3 className="feature-card-heading">Cutting Edge</h3>
              <p className="feature-card-description">
                I keep myself up-to-date on the newest tools and technologies
                like ReactJS, NextJS or Tailwind CSS (just to name a few). I
                Choose best tools for the task at hand to implement them in the
                most effective way.
              </p>
            </div>
          </div>
        </Jump>
      </div>
    </div>
  );
};

export default Features;
