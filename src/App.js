import React, { Component } from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
export class App extends Component {
  get_view = () => {
    var mainNavLinks = document.querySelectorAll("nav ul a");
    window.addEventListener("scroll", (event) => {
      var fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        var section_id = link.getAttribute("section");
        var section = document.getElementById(section_id);

        if (
          section.offsetTop <= fromTop + 50 &&
          section.offsetTop + section.offsetHeight >= fromTop + 50
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    });
  };

  componentDidMount() {
    this.get_view();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.get_view);
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Works></Works>
        <Contact></Contact>
      </React.Fragment>
    );
  }
}

export default App;