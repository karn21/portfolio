import React from "react";

function Skill(props) {
  const { skill } = props;
  return (
    <div className="skill">
      <div className="img-container">
        <img src={skill.img} alt={skill.skill} />
      </div>

      <div className="label">
        <h5>{skill.skill}</h5>
      </div>
    </div>
  );
}

export default Skill;
