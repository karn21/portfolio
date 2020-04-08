import React, { Component } from "react";
import "./works.scss";
import Work from "./Work";
import { projects } from "./WorkData";

export class Works extends Component {
  state = {
    projects: projects,
  };
  render() {
    return (
      <section id="works">
        <div className="section-head">
          <h2>My Works</h2>
          <hr />
        </div>
        <article>
          {this.state.projects.map((project) => (
            <Work key={project.id} project={project}></Work>
          ))}
        </article>
      </section>
    );
  }
}

export default Works;
