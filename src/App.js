import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "./index.css";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import Menubar from "./components/menubar";
import Home from "./components/home";
import About from "./components/about";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

class App extends Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  render() {
    return (
      <Switch className="container-fluid">
        <MDBContainer>
          <Menubar />
          <div className="row">
            <div id="main" >
              <span
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={this.openNav}
              >
                &#9776; Menu
              </span>
              <div className="container">
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Blog" component={Blog} />
                <Route path="/Portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
                <Footer className="mb-0" />
              </div>
            </div>
          </div>
          <ScrollUpButton/>
        </MDBContainer>
      </Switch>
    );
  }
}

export default App;
