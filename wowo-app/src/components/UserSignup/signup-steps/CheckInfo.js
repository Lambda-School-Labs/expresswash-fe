import React, { Component } from "./node_modules/react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "./node_modules/mdbreact";

class CheckInfo extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }

    const {
      firstName,
      lastName,
      email,
      username,
      sAddress,
      phoneNumber,
      zipcode,
      sAddress2,
      city,
      state
    } = this.props;
    return (
      <div>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="First name" value={firstName} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Last Name" value={lastName} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Username" value={username} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Phone Number" value={phoneNumber} />
          </MDBCol>
        </MDBRow>
        <MDBInput label="Email" value={email} />
        <MDBInput label="Street Address" value={sAddress} />
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="APT / SUITE / OTHER" value={sAddress2} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Zipcode" value={zipcode} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="City" value={city} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="State" value={state} />
          </MDBCol>
        </MDBRow>
        <div className="d-flex justify-content-center">
          <MDBBtn type="submit">submit</MDBBtn>
        </div>
      </div>
    );
  }
}

export default CheckInfo;