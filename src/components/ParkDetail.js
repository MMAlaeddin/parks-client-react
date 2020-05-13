import React from "react";
import PropTypes from "prop-types";

function ParkDetail(props) {
  const { park, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h2><strong>{park.name}</strong></h2>
      <h4>{park.city}, {park.state}</h4>
      <h5>Enjoy climbimg <strong>{park.climbingRoutes} </strong> routes in our majestic mountains or on our boulders!</h5>
      <h5>Need a place to sleep? We have {park.campGrounds} campgrounds to choose from ranging from water front properties to mountainous.</h5>
      <h5>If you need to grab anything we have {park.generalStores} general store(s) to make your stay in {park.name} more comfortable.</h5>
      <button onClick={ props.onClickingEdit }>Update Park</button>
    </React.Fragment>
  );
}

ParkDetail.propTypes = {
  park: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ParkDetail;