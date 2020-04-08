import React from "react";
import "./contact.scss";

function Skill() {
  return (
    <section id="contact">
      <div className="section-head">
        <h2>Contact</h2>
        <hr />
      </div>
      <div className="contacts">
        <div className="contact">
          <a
            href="https://twitter.com/_Karan21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-container">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="label">
              <h5>Twitter</h5>
            </div>
          </a>
        </div>
        <div className="contact">
          <a href="mailto:karn212000@gmail.com">
            <div className="icon-container">
              <i className="far fa-envelope"></i>
            </div>
            <div className="label">
              <h5>Gmail</h5>
            </div>
          </a>
        </div>
        <div className="contact">
          <a
            href="https://www.instagram.com/_karan2107/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-container">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="label">
              <h5>Instagram</h5>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skill;
