import React, { Component } from "react";
import "../../styles/Match/MainMatch.scss";

import user from "../../assets/user.jpg";
class MainMatch extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="textName">
            <h1 className="name">Aaryan Kapur</h1>
          </div>
          <div className="textDescription">
            <p className="description">
              Hey, I am cool,
              <br /> hang out with me!
            </p>
          </div>
          <div className="user">
            <img className="userImage" src={user} alt="" />
          </div>
          <div className="button">
            <button />
          </div>
          <div className="colorData">
            <h1 className="textColorData">What Does Blue Say:</h1>
            <p className="textColorText">
              Dynamic,<br />
              Charming,<br />
              Strong<br />
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainMatch;
