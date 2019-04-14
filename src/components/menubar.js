import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
class Menubar extends Component {
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };
  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.closeNav}
        >
          &times;
        </a>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    );
  }
}

export default Menubar;
