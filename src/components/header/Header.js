import React, { Component } from "react";
import "./header.scss";

export class Header extends Component {
  componentDidMount() {
    var mybutton = document.getElementById("topBtn");
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }
  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <>
        <header>
          <section>
            <div className="avatar-container">
              <img
                src="https://avatars1.githubusercontent.com/u/50626492?v=4"
                alt=""
              />
            </div>
            <h2>Karan Maurya</h2>
            <h5>
              CSE Undergraduate at MNIT Jaipur <br></br> Full Stack Developer
            </h5>
            <div className="section-btn">
              <a href="#">
                <button className="primary-btn">Contact</button>
              </a>
              <a
                href="https://drive.google.com/file/d/12fVtVpjtXtBie-S60-5ZxUxE9H4rdWq1/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="primary-btn">View Resume</button>
              </a>
            </div>
          </section>

          <button onClick={this.topFunction} id="topBtn" title="Go to top">
            <i className="fas fa-arrow-up"></i>
          </button>
        </header>
        <section>
          <div className="bio">
            <h2>"Hello I am</h2>
            <h1> Karan Maurya!"</h1>I am a student of B.Tech[CSE] in NIT Jaipur.
            I am interested in Full Stack Development so I have been working on
            Django and React, the best of both sides. I have ample experience
            with these technologies and looking forward for some great
            opportunities.
          </div>
        </section>
      </>
    );
  }
}

export default Header;
