import React from "react";
import "./education.scss";

function Education() {
  return (
    <section id="education">
      <div className="section-head">
        <h2>Education</h2>
        <hr />
      </div>
      <article>
        <div className="education">
          <div className="education-head">
            <h5>2018 - present</h5>
            <h2>Bachelor's Degree</h2>
          </div>
          <div className="education-detail">
            <h2>Bachelor of Technology in Computer Science and Engineering</h2>
            <p>
              <b>CGPA : 8.56</b>
            </p>
            <h3>Malaviya National Institute of Technology Jaipur</h3>
          </div>
        </div>
        <div className="education">
          <div className="education-head">
            <h5>2017-2018</h5>
            <h2>Intermediate</h2>
          </div>
          <div className="education-detail">
            <h2>Class 12th CBSE Board</h2>
            <p>
              <b>Percentage : 92.6%</b>
            </p>
            <h3>Army Public School Varanasi</h3>
          </div>
        </div>
        <div className="education">
          <div className="education-head">
            <h5>2015-2016</h5>
            <h2>Matriculation</h2>
          </div>
          <div className="education-detail">
            <h2>Class 10th CBSE Board</h2>
            <p>
              <b>CGPA : 10</b>
            </p>
            <h3>Army Public School Varanasi</h3>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Education;
