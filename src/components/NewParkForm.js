import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "/.ReusableForm";

function NewParkForm(props) {
  event.preventDefault();
  props.onNewParkCreation({
    name: event.target.name.value, 
    city: event.target.city.value,
    state: event.target.state.value,
    climbingRouts: event.target.climbingRouts.value,
    campgrounds: event.target.campgrounds.value,
    generalStores: event.target.generalStores.value
  })
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewParkFormSubmission}
        buttonText="Add Park!" />
    </React.Fragment>
  );
}

NewParkForm.propTypes = {
  onNewParkCreation: PropTypes.func
};

export default NewParkForm;
