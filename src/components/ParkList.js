import React from 'react';
import Park from './Park';
import PropTypes from 'prop-types';

function ParkList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.parkList.map((park) => 
      <Park
        whenParkClicked = { props.onParkSelection }
        name={park.name}
        city={park.city}
        state={park.state}
        climbingRoutes={park.climbingRouts}
        campgrounds={park.campgrounds}
        generalStores={park.generalStores}
        id={park.id}
        key={park.id}
        />
      )}
    </React.Fragment>
  );
}

ParkList.propTypes = {
  parkList: PropTypes.array,
  onParkSelection: PropTypes.func
};

export default ParkList;