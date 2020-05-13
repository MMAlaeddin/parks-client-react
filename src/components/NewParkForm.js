import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "/.ReusableForm";

function NewParkForm(props) {

  function addNewPark(event) {
    event.preventDefault();
    const park = {
      name: event.target.name.value, 
      city: event.target.city.value,
      state: event.target.state.value,
      climbingRouts: event.target.climbingRouts.value,
      campgrounds: event.target.campgrounds.value,
      generalStores: event.target.generalStores.value
    }
    props.onAddPark(park);
  }
  // props.onNewParkCreation({
  // })
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addNewPark}
        buttonText="Add Park!" />
    </React.Fragment>
  );
}

NewParkForm.propTypes = {
  onAddPark: PropTypes.func
};

export default NewParkForm;
