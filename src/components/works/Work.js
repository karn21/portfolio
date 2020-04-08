import React from "react";

function Work() {
  return (
    <div className="work-card">
      <div className="work-card-top"></div>
      <div className="work-card-tags"></div>
      <div>Project Name</div>
      <div className="work-card-footer">
        <button className="primary-btn">View Project</button>
        <button className="ghost-btn">View Code</button>
      </div>
    </div>
  );
}

export default Work;
