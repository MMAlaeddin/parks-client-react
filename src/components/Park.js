import React from "react";
import PropTypes from "prop-types";

function Park(props) {


  return (
    <React.Fragment>
      <div onClick = {() => props.whenParkClicked(props.id)}>
      <h2>{props.name}</h2>
      <h4>{props.city}, {props.state}</h4>
      <h5>Climbing Routes: {props.climbingRoutes}</h5>
      <h5>Campgrounds: {props.campgrounds}</h5>
      <h5>General Stores: {props.generalStores}</h5>
      </div>
    </React.Fragment>
  )
}


Park.propTypes = {
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    climbingRoutes: PropTypes.number,
    campgrounds: PropTypes.number,
    generalStores: PropTypes.number,
    whenParkClicked: PropTypes.func

};


export default Park;