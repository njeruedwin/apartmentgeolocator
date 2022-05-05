import React, { Component } from "react";
import * as roomData from "../data/room_data.json";
import { Redirect } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
//import config from './config.json';

const JUJA_BOUNDS = {
  north: 39.653244,
  south: 39.621949,
  west: -86.902833,
  east: -86.831743,
};

const ClickLog = new Array(31).fill(0);

const JUJA_CENTER = { lat: -1.101822, lng: 37.014404 };

const mapStyle = { width: "100vw", height: "100vh" };

const option = {
  restriction: {
    latLngBounds: JUJA_BOUNDS,
    strictBounds: false,
  },

  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  fullscreenControl: false,
  clickableIcons: false,
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //search criteria
      roomType: "",
      upperRange: 0,
      lowerRange: 0,

      selectedArt: null,
      modalShow: false,
      userPosition: {
        latitude: null,
        longitude: null,
      },
    };

    this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
  }

  componentDidMount() {
    //get the search criterions
    this.setState({
      roomType: this.props.location.state.roomType,
      upperRange: this.props.location.state.upperRange,
      lowerRange: this.props.location.state.lowerRange,
    });

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          userPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }

  onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    console.log("Latitude is :", lat);
    console.log("Longitude is :", lng);
    this.setState({
      userPosition: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  setSelectedArt = (art) => {
    this.setState({
      selectedArt: art,
    });
    ClickLog[art.properties.ART_ID] += 1;
    console.log(ClickLog[art.properties.ART_ID]);
  };

  setModalShow = (show) => {
    this.setState({
      modalShow: show,
    });
  };

  render() {
    const { roomType, upperRange, lowerRange, selectedArt } = this.state;

    if (selectedArt) {
      return (
        <Redirect
          push
          to={{
            pathname: "/map/apartment",
            state: {
              title: selectedArt.properties.TITLE,
              description: selectedArt.properties.DESCRIPTION,
              email: selectedArt.properties.EMAIL,
              addressOne: selectedArt.properties.ADDRESS_ONE,
              addressTwo: selectedArt.properties.ADDRESS_TWO,
              phoneNumber: selectedArt.properties.PHONENUMBER,
              type: selectedArt.properties.TYPE,
              price: selectedArt.properties.PRICE,
              imageMainView: selectedArt.properties.IMAGEMAINVIEW,
              imageOne: selectedArt.properties.IMAGEONE,
              imageTwo: selectedArt.properties.IMAGETWO,
              imageThree: selectedArt.properties.IMAGETHREE,
            },
          }}
        />
      );
    }

    return (
      <div>
        <LoadScript>
          <GoogleMap
            mapContainerStyle={mapStyle}
            center={JUJA_CENTER}
            zoom={16}
            //options={option}
          >
            <Marker
              key={"userMarker"}
              position={{
                lat: this.state.userPosition.latitude,
                lng: this.state.userPosition.longitude,
              }}
              onDragEnd={(e) => this.onMarkerDragEnd(e)}
              draggable={true}
              icon={{
                url: "./image/user.png",
                scaledSize: {
                  width: 40,
                  height: 40,
                },
              }}
            />

            {roomData.features
              .filter((apartment) =>
                apartment.properties.TYPE.toLowerCase().includes(
                  roomType.toLowerCase()
                )
              )
              .filter(
                (apartment) =>
                  apartment.properties.PRICE <= upperRange &&
                  apartment.properties.PRICE >= lowerRange
              )
              .map((apartment) => (
                <Marker
                  key={apartment.properties.ART_ID}
                  position={{
                    lat: apartment.geometry.coordinates[0],
                    lng: apartment.geometry.coordinates[1],
                  }}
                  onClick={() => {
                    this.setSelectedArt(apartment);
                    this.setModalShow(true);
                  }}
                  icon={{
                    url: "./image/marker.png",
                    scaledSize: {
                      width: 40,
                      height: 40,
                    },
                  }}
                />
              ))}
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default Map;
