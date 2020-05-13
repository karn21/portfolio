import React, { Component } from "react";
import "./timeline.scss";
import Events from "./TimelineData";
import TimelineItem from "./TimelineItem";

export class Timeline extends Component {
  state = {
    events: Events,
  };
  render() {
    return (
      <section id="timeline">
        <div className="section-head">
          <h2>My Road to Glory!</h2>
          <hr />
        </div>
        <div className="timeline">
          {/* <div class="container left">
            <div class="content">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div> */}
          {this.state.events.map((event) => (
            <TimelineItem event={event} key={event.id}></TimelineItem>
          ))}
        </div>
      </section>
    );
  }
}

export default Timeline;
