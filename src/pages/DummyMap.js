import React, { Component } from "react";

import { Link } from "react-router-dom";
import * as roomData from "../data/room_data.json";

export class DummyMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomType: "",
      upperRange: 0,
      lowerRange: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.location.state);
    this.setState({
      roomType: this.props.location.state.roomType,
      upperRange: this.props.location.state.upperRange,
      lowerRange: this.props.location.state.lowerRange,
    });
  }

  render() {
    const { roomType, upperRange, lowerRange } = this.state;
    return roomData.features
      .filter((apartment) =>
        apartment.properties.TYPE.toLowerCase().includes(roomType.toLowerCase())
      )
      .filter(
        (apartment) =>
          apartment.properties.PRICE <= upperRange &&
          apartment.properties.PRICE >= lowerRange
      )
      .map((apartment) => (
        <div>
          <p key={apartment.properties.ART_ID}>{apartment.properties.TITLE}</p>
          <p>{apartment.properties.DESCRIPTION}</p>
          <p>{apartment.properties.AUTHOR}</p>
          <Link
            to={{
              pathname: "/map/apartment",
              state: {
                title: apartment.properties.TITLE,
                description: apartment.properties.DESCRIPTION,
                email: apartment.properties.EMAIL,
                addressOne: apartment.properties.ADDRESS_ONE,
                addressTwo: apartment.properties.ADDRESS_TWO,
                phoneNumber: apartment.properties.PHONENUMBER,
                type: apartment.properties.TYPE,
                price: apartment.properties.PRICE,
                imageMainView: apartment.properties.IMAGEMAINVIEW,
                imageOne: apartment.properties.IMAGEONE,
                imageTwo: apartment.properties.IMAGETWO,
                imageThree: apartment.properties.IMAGETHREE,
              },
            }}
          >
            See Apartment
          </Link>
        </div>
      ));
  }
}

export default DummyMap;
