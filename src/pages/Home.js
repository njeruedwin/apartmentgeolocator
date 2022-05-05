import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import beautifulblack from "../images/beautifulblack.jpg";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomType: "",
      upperRange: null,
      lowerRange: null,

      success: false,
      errorMessage: "",
    };
    this.selectType = this.selectType.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.submit = this.submit.bind(this);
  }

  selectType = (event) => {
    this.setState({
      roomType: event.target.value,
    });
  };

  changeValue = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  submit = () => {
    const { roomType, lowerRange, upperRange } = this.state;
    if (!roomType) {
      return this.setState({
        errorMessage: "Please select the room type",
      });
    }
    if (!upperRange) {
      return this.setState({
        errorMessage: "Please enter the upper range value",
      });
    }
    if (!lowerRange) {
      return this.setState({
        errorMessage: "Please enter the lower range value",
      });
    }
    this.setState({
      success: true,
      errorMessage: "",
    });
  };

  render() {
    console.log(this.state);
    const { success, errorMessage } = this.state;
    if (success) {
      this.setState({
        success: false,
      });
      return (
        <Redirect
          push
          to={{
            pathname: "/map",
            state: this.state,
          }}
        />
      );
    }
    return (
      <div
        style={{
          backgroundImage: `url(${beautifulblack})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          color: "teal",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="container">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div
              className="form-group container card"
              style={{
                alignContent: "center",
                padding: "20px",
                width: "100%",
                height: "400px",
                marginTop: "100px",
                backgroundColor: "rgb(0,0,0,0.5)",
              }}
            >
              <div
                class="form-group"
                style={{
                  padding: "5px",
                  paddingLeft: "60px",
                  fontSize: "25px",
                }}
              >
                <label for=""></label>
                <select
                  class="custom-select"
                  name=""
                  id=""
                  style={{
                    borderRadius: "1.5rem",
                    border: "none",
                    color: "white",
                    backgroundColor: "transparent",
                    fontFamily: "Apple Color Emoji",
                  }}
                  onChange={this.selectType}
                >
                  <option selected>Select Room Type</option>
                  <option value="Two Bedroom" style={{ color: "black" }}>
                    Two Bedroom
                  </option>
                  <option value="Three bedroom" style={{ color: "black" }}>
                    Three bedroom{" "}
                  </option>
                  <option value="Four bedroom" style={{ color: "black" }}>
                    Four bedroom
                  </option>
                  <option value="Bed Sitter" style={{ color: "black" }}>
                    Bed Sitter
                  </option>
                </select>
              </div>

              <p
                style={{
                  height: "1px",
                  paddingLeft: "60px",
                  fontFamily: "Apple Color Emoji",
                  color: "white",
                }}
              >
                Enter Price Range
              </p>
              <div
                class="form-group"
                style={{
                  width: "250px",
                  height: "40px",
                  padding: "5px",
                  paddingLeft: "60px",
                }}
              >
                <label for=""></label>
                <input
                  style={{ height: "25px" }}
                  type="text"
                  class="form-control"
                  id="upperRange"
                  aria-describedby="helpId"
                  placeholder="10000"
                  onChange={this.changeValue}
                />
                <small
                  id="helpId"
                  class="form-text text-muted"
                  style={{ color: "white" }}
                >
                  Enter Highest Value Price
                </small>
              </div>
              <div
                class="form-group"
                style={{
                  width: "250px",
                  padding: "5px",
                  paddingLeft: "60px",
                  lineHeight: "40px",
                }}
              >
                <label for=""></label>
                <input
                  style={{ height: "25px" }}
                  type="text"
                  class="form-control"
                  id="lowerRange"
                  aria-describedby="helpId"
                  placeholder="2000"
                  onChange={this.changeValue}
                />
                <small
                  id="helpId"
                  class="form-text text-muted"
                  style={{ color: "white" }}
                >
                  Enter Lowest Value Price
                </small>
              </div>
              {errorMessage ? (
                <i
                  class="alert alert-primary   show"
                  role="alert"
                  style={{ color: "red", margin: "1px", paddingLeft: "60px" }}
                >
                  {errorMessage}
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </i>
              ) : null}
              <button
                className="search_button"
                style={{
                  marginLeft: "60px",
                  color: "white",
                  fontSize: "15px",
                }}
                onClick={this.submit}
              >
                Search apartments{" "}
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Home;
