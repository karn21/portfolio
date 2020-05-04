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
    } else {
      navbar.classList.remove("sticky");
    }
  };

  scrollTo = (pos) => {
    this.showNav();
    var el = document.getElementById(pos);
    var offset = el.offsetTop;
    window.focus();
    window.scrollTo(0, offset - 20);
  };

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
            <a section="about" onClick={() => this.scrollTo("about")}>
              <li className="nav-link">About</li>
            </a>
            <a section="education" onClick={() => this.scrollTo("education")}>
              <li className="nav-link">Education</li>
            </a>
            <a section="skills" onClick={() => this.scrollTo("skills")}>
              <li className="nav-link">Skills</li>
            </a>
            <a section="works" onClick={() => this.scrollTo("works")}>
              <li className="nav-link">My Works</li>
            </a>
            <a
              section="contact"
              id="con"
              onClick={() => this.scrollTo("contact")}
            >
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
