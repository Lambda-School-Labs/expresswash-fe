import React, { Component } from "react";
import Styled from "styled-components";
import MapGL, {
  Marker,
  FlyToInterpolator,
  Source,
  Layer,
  NavigationControl,
} from "react-map-gl";
import SimpleBar from "simplebar-react";

import Pin from "./Pin.js";
import UserCircle from "./UserCircle.js";
import WashForm from "./WashSteps/WashForm.js";
import "simplebar/dist/simplebar.min.css";

const TOKEN =
  "pk.eyJ1IjoicXVhbjAwNSIsImEiOiJjazN0a2N3a2YwM3ViM2twdzhkbGphMTZzIn0.OepqB_mymhr1YLSYwNmRSg"; // Set your mapbox token here

const FormContainer = Styled.div`
    
`;

const UserInfoContainer = Styled.div`
    margin-bottom: 10px;
`;

const P = Styled.p`
    font-size: 1.3rem;
    font-weight: 500;
`;

const FormInputContainer = Styled.div`
`;
<<<<<<< HEAD

class WashMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      draggable: false,
=======
      draggable: true,
>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 15,
        bearing: 0,
        pitch: 0,
      },
      marker: {
        latitude: 37.785164,
        longitude: -100,
      },
      events: {},
    };
  }
<<<<<<< HEAD

  _updateViewport = (viewport) => {
    this.setState(
      {
        viewport: { ...this.state.viewport, ...viewport },
      },
      console.log(viewport)
    );

    if (this.props.lat !== this.state.viewport.latitude) {
      this.setState(
        {
          viewport: {
            ...this.state.viewport,
            longitude: this.props.long,
            latitude: this.props.lat,
            zoom: 16.5,
            transitionInterpolator: new FlyToInterpolator({
              speed: 35,
              curve: 1,
            }),
            transitionDuration: "auto",
          },
        },
        () => {
          console.log(this.state.viewport);
        }
      );
    }
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat,
      },
    });
  }

  _onMarkerDragEnd = (event) => {
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
=======
=======

class WashMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggable: true,
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 15,
        bearing: 0,
        pitch: 0,
      },
      marker: {
        latitude: 37.785164,
        longitude: -100,
      },
      events: {},
    };
  }
>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced

  _updateViewport = (viewport) => {
    this.setState(
      {
        viewport: { ...this.state.viewport, ...viewport },
      },
      console.log(viewport, this.state.marker)
    );

    // if (this.props.lat !== this.state.viewport.latitude) {
    //   this.setState(
    //     {
    //       viewport: {
    //         ...this.state.viewport,
    //         longitude: this.props.long,
    //         latitude: this.props.lat,
    //         zoom: 16.5,
    //         transitionInterpolator: new FlyToInterpolator({
    //           speed: 35,
    //           curve: 1,
    //         }),
    //         transitionDuration: "auto",
    //       },
    //     },
    //     () => {
    //       console.log(this.state.viewport);
    //     }
    //   );
    // }
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat,
      },
    });
  }

  _onMarkerDragEnd = (event) => {
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
      },
    });
  };

  _goToViewport = (latitude, longitude) => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: longitude,
        latitude: latitude,
        zoom: 30,
        transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
        transitionDuration: "auto",
      },
      marker: {
        longitude: longitude,
        latitude: latitude,
<<<<<<< HEAD
>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
=======
>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
      },
    });
  };

<<<<<<< HEAD
<<<<<<< HEAD
  _goToViewport = (latitude, longitude) => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: longitude,
        latitude: latitude,
        zoom: 10,
        transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
        transitionDuration: "auto",
      },
      marker: {
        longitude: longitude,
        latitude: latitude,
=======
=======
>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
  addLines = () => {
    const map = this.refs.map.getMap();
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.48369693756104, 37.83381888486939],
              [116.48348236083984, 37.83317489144141],
            ],
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 8,
<<<<<<< HEAD
>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
=======
>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
      },
    });
  };

<<<<<<< HEAD
<<<<<<< HEAD
  addLines = () => {
    const map = this.refs.map.getMap();
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.48369693756104, 37.83381888486939],
              [116.48348236083984, 37.83317489144141],
            ],
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 8,
      },
    });
  };

  componentWillMount() {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: this.props.lat,
        longitude: this.props.long,
      },
      marker: {
        latitude: this.props.lat,
        longitude: this.props.long,
      },
    });
    this.props.getCurrentAddress(this.props.lat, this.props.long, TOKEN);
  }

=======
  componentWillMount() {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: this.props.lat,
        longitude: this.props.long,
      },
      marker: {
        latitude: this.props.lat,
        longitude: this.props.long,
      },
    });
    this.props.getCurrentAddress(this.props.lat, this.props.long, TOKEN);
  }

>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lat !== this.props.lat) {
      this._goToViewport(this.props.lat, this.props.long);
      console.log("prevProps", prevProps.lat);
      console.log("new lat", this.props.lat);
      console.log("new long", this.props.long);
    }
  }

  render() {
    const { viewport, marker } = this.state;
    const {
      currentWeek,
      step,
      values,
      searchResults,
      geoCoding,
      getUserLocation,
      addressOnClick,
      vehicleOnClick,
      washDateOnClick,
      washTimeOnClick,
    } = this.props;
<<<<<<< HEAD

    return (
      <>
        <MapGL
          {...viewport}
          ref={"map"}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._updateViewport}
          // onLoad={this.addLines}
          mapboxApiAccessToken={TOKEN}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable={this.state.draggable}
            onDragStart={this._onMarkerDragStart}
            onDrag={this._onMarkerDrag}
            onDragEnd={this._onMarkerDragEnd}
          >
            {this.state.draggable ? <Pin size={30} /> : <UserCircle />}
          </Marker>
        </MapGL>

=======
  componentWillMount() {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: this.props.lat,
        longitude: this.props.long,
      },
      marker: {
        latitude: this.props.lat,
        longitude: this.props.long,
      },
    });
    this.props.getCurrentAddress(this.props.lat, this.props.long, TOKEN);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lat !== this.props.lat) {
      this._goToViewport(this.props.lat, this.props.long);
      console.log("prevProps", prevProps.lat);
      console.log("new lat", this.props.lat);
      console.log("new long", this.props.long);
    }
  }

  render() {
    const { viewport, marker } = this.state;
    const {
      currentWeek,
      step,
      values,
      searchResults,
      geoCoding,
      getUserLocation,
      addressOnClick,
      vehicleOnClick,
      washDateOnClick,
      washTimeOnClick,
    } = this.props;

    return (
      <>
        <MapGL
          {...viewport}
          ref={"map"}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._updateViewport}
          // onLoad={this.addLines}
          mapboxApiAccessToken={TOKEN}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable={this.state.draggable}
            onDragStart={this._onMarkerDragStart}
            onDrag={this._onMarkerDrag}
            onDragEnd={this._onMarkerDragEnd}
          >
            {this.state.draggable ? <Pin size={30} /> : <UserCircle />}
          </Marker>
        </MapGL>

>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
=======

    return (
      <>
        <MapGL
          {...viewport}
          ref={"map"}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._updateViewport}
          // onLoad={this.addLines}
          mapboxApiAccessToken={TOKEN}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable={this.state.draggable}
            onDragStart={this._onMarkerDragStart}
            onDrag={this._onMarkerDrag}
            onDragEnd={this._onMarkerDragEnd}
          >
            {this.state.draggable ? <Pin size={30} /> : <UserCircle />}
          </Marker>
        </MapGL>

>>>>>>> 4a72ba2085e8b2d1a55521b9b0a43bedf55beced
        <SimpleBar
          className={
            step === 3 || step === 4
              ? "form-container"
              : "form-container overflow-hidden"
          }
          scrollableNodeProps={{ ref: this.scrollableNodeRef }}
        >
          <UserInfoContainer>
            {this.props.user.profilePicture === "" ? (
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="30" fill="#00A8C5" />
                <text
                  x="50%"
                  y="50%"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  fontSize="40"
                  fill="#fff"
                >
                  {this.props.user.firstName.charAt(0).toUpperCase()}
                </text>
              </svg>
            ) : (
              <img
                src={this.props.user.profilePicture}
                style={{ width: 60 + "%" }}
                alt="Profile Img"
              />
            )}
            <P>
              {step === 1
                ? `Welcome, ${this.props.user.firstName}`
                : step === 2
                ? `Choose your vehicle`
                : step === 3
                ? `Select a Date`
                : step === 4
                ? ` Select a Time`
                : step === 5
                ? `Which service would you like?`
                : `Confirm your wash`}
            </P>
          </UserInfoContainer>
          <FormInputContainer>
            {/* {step === 1 ?
                            <SelectAddress
                                next={this.nextStep}
                                prev={this.prevStep}
                                onClick={this.addressOnClick}
                                inputHandler={this.inputHandler}
                                values={values}
                            />
                        :
                            (step === 2 ?
                                <ChooseVehicle
                                    next={this.nextStep}
                                    prev={this.prevStep}
                                    onClick={this.vehicleOnClick}
                                    inputHandler={this.inputHandler}
                                    values={values} 
                                />
                            :
                                (step === 3 ?
                                    <ScheduleWash 
                                        next={this.nextStep}
                                        prev={this.prevStep}
                                        inputHandler={this.inputHandler}
                                        values={values}
                                    />
                                :
                                    (step === 4 ?
                                        <SelectService
                                            next={this.nextStep}
                                            prev={this.prevStep}
                                            onClick={this.serviceOnClick}
                                            inputHandler={this.inputHandler}
                                            values={values}
                                        />
                                    :
                                        <ConfirmWash />
                                    )
                                )
                            )
                        } */}
            <WashForm
              next={this.props.next}
              prev={this.props.prev}
              step={step}
              onClick={this.props.addressOnClick}
              inputHandler={this.props.inputHandler}
              values={values}
              viewport={viewport}
              mapBoxApiToken={TOKEN}
              searchResults={searchResults}
              geoCoding={geoCoding}
              getUserLocation={getUserLocation}
              addressOnClick={addressOnClick}
              vehicleOnClick={vehicleOnClick}
              currentWeek={currentWeek}
              washDateOnClick={washDateOnClick}
              washTimeOnClick={washTimeOnClick}
            />
          </FormInputContainer>
        </SimpleBar>
      </>
    );
  }
}

export default WashMap;
