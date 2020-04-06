import "./navbar.scss";
import React, { Component } from "react";

export class Navbar extends Component {
  showNav = () => {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

  render() {
    return (
      <nav className="navbar">
        <a href="https://github.com/karn21" target="_blank">
          <button className="github-btn">
            <i className="fab fa-github github-icon"></i>
            <span className="github-text">Github Profile</span>
          </button>
        </a>

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
