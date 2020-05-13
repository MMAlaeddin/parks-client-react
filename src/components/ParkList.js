import React, { useState, useEffect } from 'react';
import Park from './Park';
import PropTypes from 'prop-types';
import NewParkForm from './NewParkForm';

function ParkList() {
  const [parkList, setParkList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    get();
  }, [])

  async function addPark(park) {
    await fetch(``, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(park)
    })
  }

  async function get() {
    await fetch(``)
    .then(response => response.json())
    .then((jsonifiedResponse) => {
      setParkList(jsonifiedResponse);
    })
    .catch((error) => {
      setError(error);
    });
  }

  async function deletePark(id) {
    await fetch(``, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then((jsonifiedResponse) => {
      setParkList(jsonifiedResponse);
    })
    .catch((error) => {
      setError(error);
    });
  }

  async function editPark(id, propsToUpdate) {
    await fetch(`/{id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(propsToUpdate)
    })
  }

  return (
    <React.Fragment>
      <h1>Compground Park</h1>
      <NewParkForm onAddPark={addPark}/>
      {parkList !== null ? parkList.map(park => <Park key={park.parkId} park={park} onDeletePaark={deletePark} onEditPark={editPark}/>) : <h1>{error}</h1>}
      {/* <hr/>
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
        /> */}
    </React.Fragment>
  );
}

// ParkList.propTypes = {
//   parkList: PropTypes.array,
//   onParkSelection: PropTypes.func
// };

export default ParkList;