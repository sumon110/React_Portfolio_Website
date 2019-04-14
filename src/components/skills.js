import React from "react";
import { MDBProgress } from "mdbreact";
const Skills = () => {
  return (
    <div>
      <div className="container card py-4">
        <h1 className="text-center font-weight-bold">SKILLS </h1>
        <div className="py-3">
          <h1 className="font-weight-bold">html</h1>
          <MDBProgress material value={100} height="20px" color="success">
            100%
          </MDBProgress>
        </div>
        <div className="py-3">
          <h1 className="font-weight-bold">css</h1>
          <MDBProgress material value={100} height="20px" color="primary">
            100%
          </MDBProgress>
        </div>
        <div className="py-3">
          <h1 className="font-weight-bold">bootstrap</h1>
          <MDBProgress material value={80} height="20px" color="secondary">
            80%
          </MDBProgress>
        </div>
        <div className="py-3">
          <h1 className="font-weight-bold">javascript</h1>
          <MDBProgress material value={75} height="20px" color="info">
            75%
          </MDBProgress>
        </div>
        <div className="py-3">
          <h1 className="font-weight-bold">react/redux</h1>
          <MDBProgress material value={65} height="20px" color="danger">
            65%
          </MDBProgress>
        </div>
        <div className="py-3">
          <h1 className="font-weight-bold">node js</h1>
          <MDBProgress material value={50} height="20px" color="default">
            50%
          </MDBProgress>
        </div>
        <div className="py-3">
          <h1 className="font-weight-bold">mongo db</h1>
          <MDBProgress material value={40} height="20px" color="light-blue">
            40%
          </MDBProgress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
