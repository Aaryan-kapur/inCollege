import React, { Component } from "react";
import "../../styles/Match/MainMatch.scss";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from "mdbreact";

import user from "../../assets/user.jpg";
class MainMatch extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container mainMatch">
          <div className="user">
            <p className="textColorText">Dynamic, Charming, Strong</p>
            <MDBCol clasaName="cardOuter">
              <MDBCard className="card">
                <MDBCardImage className="img-fluid cardImage" src={user} />
                <MDBCardBody>
                  {" "}
                  <div className="textName">
                    <h1 className="name">Aaryan Kapur</h1>
                  </div>
                  <div className="textDescription">
                    <p className="description">
                      Hey, I am cool,
                      <br /> hang out with me!
                    </p>
                  </div>
                  <div className="colorData">
                    <button className="button" />
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainMatch;
