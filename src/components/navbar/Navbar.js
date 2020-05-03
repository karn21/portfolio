import "./navbar.scss";
import React, { Component } from "react";

export class Navbar extends Component {
  state = {
    showMenu: false,
  };
  showNav = () => {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "grid";
    } else {
      menu.style.display = "none";
    }
  };

  stickyNav = () => {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset >= window.innerHeight / 10) {
      navbar.classList.add("sticky");
      console.log("working");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  scrollToLink = () => {};

  componentDidMount() {
    window.addEventListener("scroll", this.stickyNav);
  }

  render() {
    return (
      <nav className="navbar" id="navbar">
        <div>
          <a
            href="https://github.com/karn21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-btn">
              <i className="fab fa-github github-icon"></i>
              <span className="github-text">Github Profile</span>
            </button>
          </a>
        </div>

        {/* {this.state.showMenu ? (
          <ul className="nav-links">
            <div id="menu">
              <a href="#">
                <li className="nav-link">Education</li>
              </a>
              <a href="#">
                <li className="nav-link">Skills</li>
              </a>
              <a href="#">
                <li className="nav-link">My Works</li>
              </a>
              <a href="#">
                <li className="nav-link">Contact</li>
              </a>
            </div>
          </ul>
        ) : (
          <ul></ul>
        )} */}

        <ul className="nav-links">
          <div id="menu" style={{ display: "none" }}>
            <a href="#about" onClick={this.showNav}>
              <li className="nav-link">About</li>
            </a>
            <a href="#education" onClick={this.showNav}>
              <li className="nav-link">Education</li>
            </a>
            <a href="#skills" onClick={this.showNav}>
              <li className="nav-link">Skills</li>
            </a>
            <a href="#works" onClick={this.showNav}>
              <li className="nav-link">My Works</li>
            </a>
            <a href="#contact" onClick={this.showNav}>
              <li className="nav-link">Contact</li>
            </a>
          </div>
        </ul>

        <div className="menu-btn">
          <button className="menu-toggle" onClick={this.showNav}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
