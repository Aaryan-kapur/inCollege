import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import '../../styles/Match/MainMatch.scss'
class MainMatch extends Component {
    state = {  }
    render() { 
        return (  <React.Fragment>

    <MDBCol>
        <div className="cardOuter">

      <MDBCard className="card" style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>
    </MDBCol>


        </React.Fragment>);
    }
}
 
export default MainMatch;