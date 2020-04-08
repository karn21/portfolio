import React, { Component } from "react";
import "./works.scss";
import Work from "./Work";

export class Works extends Component {
  render() {
    return (
      <section id="works">
        <div className="section-head">
          <h2>My Works</h2>
          <hr />
        </div>
        <article>
          <Work></Work>
        </article>
      </section>
    );
  }
}

export default Works;
