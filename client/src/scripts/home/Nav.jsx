import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../../styles/Nav.scss";
const link = require('../Links.jsx');

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <nav className="NavBar sticky-top">
              <div className="row navInner">
                <div className="col-sm-1 col-md-1 col">
                  <div className="logo inner row">
                  <a href={link[0]} className="href"> <span>inCollege</span></a>
                  </div>
                </div>
                <div className="col-sm-10 col-md-10 col hide">
                  <div className="buttons row">
                  <div className="Phone">
                    <h1 className="textPhone">  inCollege</h1>
                    </div>
                    <div className="collection">

                      <a href={link[0]+'knowMore'}><span  className="knowMore button-nav">Know More</span></a>
                      <span className="aboutUs button-nav">About Us</span>
                      <span className="ADD button-nav">
                        {" "}
                        About inCollege
                      </span>
                      <span className="ourActivites button-nav">
                        Our Activities
                      </span>
                      <span className="contactUs button-nav">Contact Us</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1 col-md-1 col hide">
                <div className="inner">
                  <span className="lastLogo">perplexed</span>
                
                </div>
                </div>
              </div>
            </nav>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default Nav;
