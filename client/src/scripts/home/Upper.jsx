import React, { Component } from "react";
import "../../styles/Upper.scss";
import UpperImage from "../../assets/Upper.png";
class Upper extends Component {
  render() {
    return (
      <div className="mainUpper container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="imageUpper">
              <img className="upperImage" src={UpperImage} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="text-upper">
              <h1 className="upperText">
                We know it's difficult finding friends at a new place
              </h1>
              <button className="btn-sm btn white pink-text buttonUpper">
                Find A Match!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upper;
