import React from "react";
import "./about.scss";

function About() {
  return (
    <section id="about">
      <div>
        <div className="section-head">
          <h2>About</h2>
          <hr />
        </div>
        <div className="bio">
          <div className="about-me">
            <h3>About Me</h3>I am a second year B.Tech[CSE] student in NIT
            Jaipur. I am interested in Full Stack Development so I have been
            working on Django and React, the best of both sides. I have ample
            experience with these technologies and looking forward for some
            great opportunities.
          </div>
          <div className="basic">
            <h3>Basic Information</h3>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b style={{ fontSize: "0.8rem" }}>AGE:</b>
                  </td>
                  <td style={{ paddingLeft: "0.5rem" }}>20</td>
                </tr>
                <tr>
                  <td>
                    <b style={{ fontSize: "0.8rem" }}>PHONE:</b>
                  </td>
                  <td style={{ paddingLeft: "0.5rem" }}>+917877880751</td>
                </tr>
                <tr>
                  <td>
                    <b style={{ fontSize: "0.8rem" }}>EMAIL:</b>
                  </td>
                  <td style={{ paddingLeft: "0.5rem" }}>
                    karn212000@gmail.com
                  </td>
                </tr>
                <tr>
                  <td>
                    <b style={{ fontSize: "0.8rem" }}>GITHUB:</b>
                  </td>
                  <td style={{ paddingLeft: "0.5rem" }}>
                    <a href="https://github.com/karn21">
                      https://github.com/karn21
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
