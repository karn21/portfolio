import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
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
        <header id="header">
          <Navbar></Navbar>
          <section style={{ paddingTop: "1rem" }}>
            <div className="avatar-container">
              <img
                src="https://avatars1.githubusercontent.com/u/50626492?v=4"
                alt=""
              />
            </div>
            <h2 className="type">Karan Maurya</h2>
            <h5>
              CSE Undergraduate at MNIT Jaipur <br></br> Full Stack Developer
            </h5>
            {/* <div className="section-btn">
              <a href="#contact">
                <button className="primary-btn">Contact</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1-WbNqgif5qNTQDCl9P2XJWzc-Fhae-vS/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="primary-btn">View Resume</button>
              </a>
            </div> */}
          </section>

          <button onClick={this.topFunction} id="topBtn" title="Go to top">
            <i className="fas fa-arrow-up"></i>
          </button>
        </header>
      </>
    );
  }
}

export default Header;
