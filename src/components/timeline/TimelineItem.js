import React from "react";

function TimelineItem(props) {
  const event = props.event;
  return (
    <div className="timeline-container">
      <div className="timeline-item">
        <div className="timeline-header">
          <div>{event.tag}</div>
          <div>{event.date}</div>
        </div>
        <div className="timeline-title">{event.title}</div>
        <div className="timeline-desc">{event.description}</div>
        <div className="timeline-link">{event.link.text}</div>
      </div>
    </div>
  );
}

export default TimelineItem;
