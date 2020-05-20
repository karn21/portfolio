import React from "react";

function Work(props) {
  const { project } = props;
  return (
    <div className="work-card">
      <div className="work-card-top">
        <img src={project.cover_img} alt="" />
      </div>
      <div className="content">
        <h3>{project.title}</h3>
        <div className="work-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className={`tag ${tag}-tag`}>
              {tag}
            </span>
          ))}
        </div>
        <p>{project.description}</p>
        <div className="work-card-footer">
          <a
            href={project.project_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-btn">View Project</button>
          </a>
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ghost-btn">View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
