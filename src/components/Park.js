import React from "react";
import PropTypes from "prop-types";

function Park(props) {


  return (
    <React.Fragment>
      <div onClick = {() => props.whenParkClicked(props.id)}>
        
      </div>
    </React.Fragment>
  )
}


Park.propTypes = {
    
}


export default Park;