import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className=" jumbotron bg-secondary text-center">
          <h1 className="animated rotateIn delay-1s font-weight-bold text-center text-white text-uppercase ">
            This is my Portfolio work
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6  py-2">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  alt="poftfolio"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6  py-2">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  alt="portfolio"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6  py-2">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  alt="portfolio"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6  py-2">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  alt="portfolio"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
