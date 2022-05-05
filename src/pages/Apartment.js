import React, { Component } from "react";
import beautifulblack from "../images/beautifulblack.jpg";
import Card from "../Components/Card";
import Images from "../Components/Images";

export class Apartment extends Component {
  render() {
    const { imageMainView } = this.props.location.state;
    return (
      <div>
        <img
          src={require(`../images/${imageMainView}`)}
          class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
          alt="aprtment image"
          style={{
            width: "100%",
            height: "40vh",
          }}
        />

        <div class="container">
          <div className="row">
            <Images image={this.props.location.state} />
            <Card apartment={this.props.location.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Apartment;
