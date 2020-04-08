import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Header></Header>
        <Education></Education>
        <Skills></Skills>
        <Works></Works>
        <Contact></Contact>
      </React.Fragment>
    );
  }
}

export default App;
