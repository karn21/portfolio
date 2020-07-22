import React from "react";

function TimelineItem(props) {
  const event = props.event;
  return (
    <div className="timeline-container">
      <div className="timeline-item">
        <div className="timeline-header">
          <div
            className="timeline-tag"
            style={{ backgroundColor: event.tag.color }}
          >
            {event.tag.text}
          </div>
          <div className="date">{event.date}</div>
        </div>
        <div className="timeline-title">{event.title}</div>
        <div className="timeline-desc">{event.description}</div>
        {event.link && (
          <>
            <hr></hr>

            <div className="timeline-link">
              <a href={event.link.url}>{event.link.text}</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
