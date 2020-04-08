import React from "react";

function Skill(props) {
  const { skill } = props;
  return (
    <section id="contact">
      <div className="contact">
        <a href="#" target="_blank">
          <div className="icon-container"></div>
          <div className="label">
            <h5>Twitter</h5>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Skill;
