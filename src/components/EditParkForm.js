import React from 'react';

function EditParkForm(props) {
  return (
    <React.Fragment>
      <h3>Create Park</h3>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'National Park Name' /><br/>
        <input
          type = 'text'
          city = 'city'
          placeholder = 'City' /><br/>
        <input
          type = 'text'
          state = 'state'
          placeholder = 'State' /><br/>
        <input
          type = 'text'
          climbingRoutes = 'climbingRoutes'
          placeholder = 'Climbing Routes' /><br/>
        <input
          type = 'text'
          campgrounds = 'campgrounds'
          placeholder = 'Campgrounds' /><br/>
        <input
          type = 'text'
          generalStore = 'generalStores'
          placeholder = 'General Stores' /><br/>
      </form>
    </React.Fragment>
  );
}

EditParkForm.propTypes = {
  onEditPark: PropTypes.func
};

export default EditParkForm;