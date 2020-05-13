import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditParkForm (props) {
  const { park } = props;

  function handleEditParkFormSubmission(event) {
    event.preventDefault();
    props.onEditPark({
      name: event.target.name.value, 
      city: event.target.city.value,
      state: event.target.state.value,
      climbingRouts: event.target.climbingRouts.value,
      campgrounds: event.target.campgrounds.value,
      generalStores: event.target.generalStores.value,
      id: park.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditParkFormSubmission}
        buttonText="Update Park" />
    </React.Fragment>
  );
}

EditParkForm.propTypes = {
  onEditPark: PropTypes.func
};

export default EditParkForm;