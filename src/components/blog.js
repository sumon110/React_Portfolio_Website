import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";
import appFot from "./asset/appFot.jpg";
import Blog_img from "./asset/Blog_img.png";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="animated zoomInUp delay-1s"
            style={{
              backgroundImage: `url(${appFot})`,
              backgroundPosition: "center,center",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              height: "500px",
              width: "100%",
              marginTop: "0px"
            }}
          >
            <div className="text-center">
              <img src={Blog_img} alt="" />
            </div>
            <h1
              className="text-uppercase text-center mt-2 pink-text bg-dark py-2 rounded-pill"
              style={{
                fontSize: "40px",
                fontWeight: "800",
                lineHeight: "50px"
              }}
            >
              I am available for everyone.You can get your important knowledge
              form this blog
            </h1>
          </div>
        </div>
        <div className="row py-4">
          <p>
            A good screen mockup in PSD or Sketch format helps designers and
            marketers make professional and attractive websites, portfolios and
            ad designs with simple clicks. However, searching for the perfect
            free laptop screen mockup can be time-consuming.
          </p>
          <p>
            If you are looking for free computer screen mockups especially for
            Macbook laptops to create a stunning web/app/portfolio advertising
            design, then, look no further.
          </p>
        </div>
        <MDBCard className="my-5 px-5 pb-5">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Recent posts
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="green-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="utensils" className="pr-2" />
                    Food
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Title of the news</strong>
                </h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus et aut officiis debitis.
                </p>
                <p>
                  by
                  <a href="#!">
                    <strong>Carine Fox</strong>
                  </a>
                  , 19/08/2018
                </p>
                <MDBBtn color="success" size="md" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="7">
                <a href="#!" className="pink-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="image" className="pr-2" />
                    Lifestyle
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Title of the news</strong>
                </h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
                </p>
                <p>
                  by
                  <a href="#!">
                    <strong>Carine Fox</strong>
                  </a>
                  , 14/08/2018
                </p>
                <MDBBtn
                  color="pink"
                  size="md"
                  className="mb-lg-0 mb-4 waves-light"
                >
                  Read more
                </MDBBtn>
              </MDBCol>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="indigo-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="suitcase" className="pr-2" />
                    Food
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Title of the news</strong>
                </h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro qui dolorem
                  ipsum quia sit amet.
                </p>
                <p>
                  by
                  <a href="#!">
                    <strong>Carine Fox</strong>
                  </a>
                  , 11/08/2018
                </p>
                <MDBBtn color="indigo" size="md" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Blog;
