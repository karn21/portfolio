import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Header></Header>
      </div>
    );
  }
}

export default App;
