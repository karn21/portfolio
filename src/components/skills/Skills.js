import React, { Component } from "react";
import "./skills.scss";
import Skill from "./Skill";
import react from "./react.png";
import html from "./html.png";
import css from "./css.png";
import django from "./django.png";
import bootstrap from "./bootstrap.png";
import javascript from "./javascript.png";

export class Skills extends Component {
  state = {
    skills: [
      { skill: "html", img: html },
      { skill: "css", img: css },
      { skill: "bootstrap", img: bootstrap },
      { skill: "react", img: react },
      { skill: "django", img: django },
      { skill: "javascript", img: javascript },
    ],
  };
  render() {
    return (
      <section id="skills">
        <div className="section-head">
          <h2>Skills</h2>
          <hr />
        </div>
        <article>
          {this.state.skills.map((skill) => (
            <Skill key={skill.skill} skill={skill}></Skill>
          ))}
        </article>
      </section>
    );
  }
}

export default Skills;
