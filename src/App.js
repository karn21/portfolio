import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Header></Header>
        <Education></Education>
      </React.Fragment>
    );
  }
}

export default App;
