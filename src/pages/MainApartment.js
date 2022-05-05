import React, { Component } from "react";
import axios from "axios";
import beautifulblack from "../images/beautifulblack.jpg";

class Apartment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      email: "",
      addressOne: "",
      addressTwo: "",
      phoneNumber: "",
      description: "",
    };

    this.profile = this.profile.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.location.state.title,
      description: this.props.location.state,
    });
  }

  profile = () => {
    console.log("hereee");
    return (
      <div>
        <div>
          <div class="col-md-6">
            <p style={{ backgroundColor: "rgb(0,0,0,0.5)", padding: "10px" }}>
              Email: {this.props.location.state.email}
            </p>
            <p style={{ backgroundColor: "rgb(0,0,0,0.5)", padding: "10px" }}>
              Address: {this.props.location.state.addressOne}
            </p>
            <p style={{ backgroundColor: "rgb(0,0,0,0.5)", padding: "10px" }}>
              Address 2: {this.props.location.state.addressTwo}
            </p>
            <p style={{ backgroundColor: "rgb(0,0,0,0.5)", padding: "10px" }}>
              description: {this.props.location.state.description}
            </p>
          </div>
          <div class="col-md-6">
            <p style={{ backgroundColor: "rgb(0,0,0,0.5)", padding: "10px" }}>
              Phone Number: {this.props.location.state.phoneNumber}
            </p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${beautifulblack})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div style={{ paddingTop: "50px" }}>
          <div
            class="jumbotron"
            style={{
              backgroundColor: "rgb(255,255,255,0.2)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",

              color: "white",
            }}
          >
            <div
              className="container card"
              style={{ backgroundColor: "rgb(0,0,0,0.5)" }}
            >
              <h1
                style={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                }}
              >
                {this.props.location.housingCooperativeName}
              </h1>
              <p style={{ textAlign: "center", fontSize: "40px" }}>
                {this.props.location.state.title} User Profile{" "}
              </p>

              <p>
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  data-toggle="collapse"
                  data-target="#demo"
                >
                  View Profile
                </button>{" "}
                <br />
                <div id="demo" class="collapse">
                  {this.profile()}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apartment;
