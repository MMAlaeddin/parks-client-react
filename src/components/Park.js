import React, {useState} from 'react';
// import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

export default function Park(props) {
  const { park } = props;
  const [isEditing, setIsEditing] = useState(false);
  let button = isEditing ? null : <button onClick = {() => setIsEditing(!isEditing)}>Edit Park</button>

  const handleEditParkFormSubmission = event => {
    event.preventDefault();
    const propertiesToUpdate ={
      name: event.target.name.value,
      climbingRoutes: event.target.climbingRoutes.value,
      camgrounds: event.target.camgrounds.value,
      generalStores: event.target.generalStores.value
    }

    props.onEditPark(park.parkId, propertiesToUpdate);
    setIsEditing(!isEditing);
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenParkClicked(props.id)}>
      <h2>{props.name}</h2>
      <h4>{props.city}, {props.state}</h4>
      <h5>Climbing Routes: {props.climbingRoutes}</h5>
      <h5>Campgrounds: {props.campgrounds}</h5>
      <h5>General Stores: {props.generalStores}</h5>
      {button}
      {isEditing ? <ReusableForm formSubmissionHandler={handleEditParkFormSubmission} 
        buttonText="Save Park Changes!" /> : null}}
      <button onClick={() => props.onDeletePark(park.parkId)}>Delete Park</button>
      </div>
    </React.Fragment>
  )
}


// Park.propTypes = {
//     name: PropTypes.string,
//     city: PropTypes.string,
//     state: PropTypes.string,
//     climbingRoutes: PropTypes.number,
//     campgrounds: PropTypes.number,
//     generalStores: PropTypes.number,
//     whenParkClicked: PropTypes.func

// };


// export default Park;