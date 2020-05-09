import React, { Component } from "react";
import "./skills.scss";
import Skill from "./Skill";
import react from "./react.png";
import html from "./html.png";
import css from "./css.png";
import django from "./django.png";
import bootstrap from "./bootstrap.png";
import javascript from "./javascript.png";
import svg from "./interface.svg";
import cpp from "./cpp.png";
import python from "./python.svg";

export class Skills extends Component {
  state = {
    skills: [
      { skill: "html", img: html },
      { skill: "css", img: css },
      { skill: "bootstrap", img: bootstrap },
      { skill: "react", img: react },
      { skill: "django", img: django },
      { skill: "javascript", img: javascript },
      { skill: "c++", img: cpp },
      { skill: "python", img: python },
    ],
  };
  render() {
    return (
      <section id="skills">
        <div className="section-head">
          <h2>Skills</h2>
          <hr />
        </div>
        <div className="description">
          <div className="svg-container">
            <img src={svg}></img>
          </div>
          <h3>
            I am particularly interested in web development. Apart from my
            curriculum I have self taught myself many technologies. I have been
            exploring opportunities as a Full Stack Developer. My primary focus
            is on Django + React Full Stack. Also I am equally proficient in
            Data Structures and Algorithms.
          </h3>
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
