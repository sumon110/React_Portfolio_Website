import React, { Component } from "react";
import vid from "./asset/vid.mp4";
class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: vid
    };
  }

  render() {
    return (
      <div className="container">
        <video
          id="background-video"
          loop
          autoPlay
          style={{ height: "100%", width: "100%" }}
        >
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Example;
