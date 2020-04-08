import React from "react";
import "./education.scss";
import logo from "./school-logo.png";
import mnit from "./mnit-logo.png";

function Education() {
  return (
    <section id="education">
      <div className="section-head">
        <h2>Education</h2>
        <hr />
      </div>
      <article>
        <a href="http://mnit.ac.in/" target="_blank" rel="noopener noreferrer">
          <div className="education">
            <div className="institute-icon">
              <img src={mnit} alt="" />
            </div>
            <div className="education-detail">
              <h3>B.Tech(CSE)</h3>
              <h5>MNIT Jaipur</h5>
            </div>
          </div>
        </a>

        <a
          href="https://www.apsvaranasi.org/webpage/index.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="education">
            <div className="institute-icon">
              <img src={logo} alt="" />
            </div>
            <div className="education-detail">
              <h3>Intermediate (12th)</h3>
              <h5>Army Public School Varanasi</h5>
            </div>
          </div>
        </a>
        <a
          href="https://www.apsvaranasi.org/webpage/index.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="education">
            <div className="institute-icon">
              <img src={logo} alt="" />
            </div>
            <div className="education-detail">
              <h3>Matriculation (10th)</h3>
              <h5>Army Public School Varanasi</h5>
            </div>
          </div>
        </a>
      </article>
    </section>
  );
}

export default Education;
