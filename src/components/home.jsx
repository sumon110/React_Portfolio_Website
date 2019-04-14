import React, { Component } from "react";
import welcome from "../welcome.jpg";
import "./home.css";
import Example from "./video";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{
            backgroundImage: `url(${welcome})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100%"
          }}
        >
          <div>
            <h1 className="animated  heartBeat delay-2s text-uppercase text-center display-4 pink-text font-weight-bold ">Hey ! My name is Md Sumon
              
            </h1>
            <h1 className="animated  heartBeat delay-2s text-uppercase text-center display-4 amber-text font-weight-bold ">
              I am a web & font designer based in es6
            </h1>
          </div>
        </div>
        <div className="row">
          <Example />
        </div>
      </div>
    );
  }
}

export default Home;
