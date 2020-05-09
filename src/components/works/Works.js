import React, { Component } from "react";
import "./works.scss";
import Work from "./Work";
import { projects } from "./WorkData";
import svg from "./img/avatar.svg";

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
        <div className="description">
          <div className="svg-container">
            <img src={svg}></img>
          </div>
          <h3>
            I prefer practical knowledge over theory. So whatever I have learnt,
            I have tried to implement in these projects. Most of these are
            personal projects and their source codes are publically available on
            my github account. Feel free to check these out and provide any
            feedback.
          </h3>
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
