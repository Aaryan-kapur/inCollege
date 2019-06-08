import React from "react";

import "../../styles/Match/BottomNav.scss";
import { FaUser, FaTools, FaStore, FaHeart, FaMobile } from "react-icons/fa";

class BottomNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="NavBar1 fixed-bottom">
          <div className="buttons ">
            <div className="collection ">
              <div className="container w=100">
                <div className="row">
                  <div className="col-2 colBottom">
                    {" "}
                    <FaStore />
                    Store
                  </div>
                  <div className="col-2 colBottom">
                    {" "}
                    <FaUser />
                    <br />
                    Profile
                  </div>
                  <div className="col-4 colBottom">
                    {" "}
                    <FaHeart />
                    <br />
                    My Matches{" "}
                  </div>
                  <div className="col-2 colBottom">
                    {" "}
                    <FaMobile /> Data
                  </div>

                  <div className="col-2 colBottom">
                    {" "}
                    <FaTools />
                    Tools
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default BottomNav;
