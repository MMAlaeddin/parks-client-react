import React, { useState, useEffect } from 'react';
import Park from './Park';
import PropTypes from 'prop-types';
import NewParkForm from './NewParkForm';

function ParkList(props) {
  const [parkList, setParkList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    get();
  }, [])

  // async function addPark(park) {
  //   await fetch(`https://localhost:5004/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(park)
  //   });
  //   this.setState({newParkFormVisible: false});
  //   const { dispatch } = this.props;
  //   dispatch(makeApiCall());
  // }

  async function get() {
    await fetch(`https://localhost:5004/`)
    .then(response => response.json())
    .then((jsonifiedResponse) => {
      setParkList(jsonifiedResponse);
    })
    .catch((error) => {
      setError(error);
    });
  }

  // async function deletePark(id) {
  //   await fetch(`https://localhost:5004/api/parks/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(response => response.json())
  //   .then((jsonifiedResponse) => {
  //     setParkList(jsonifiedResponse);
  //   })
  //   .catch((error) => {
  //     setError(error);
  //   });
  // }

  // handleEditingPark = async (park) => {
  //   const id = park.parkId;
  //   await fetch(`https://localhost:5004/api/park/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(park)
  //   });
  // }
  // this.setState({
  //   selectedPark: null
  // })
  // const { dispatch } = this.props;
  // dispatch(makeApiCall());

  return (
    <React.Fragment>
      <h1>National Parks</h1>
      <button onClick = {() => props.handleClick()}>Add A Park</button>

      {/* <NewParkForm onAddPark={addNewPark}/>
      {parkList !== null ? parkList.map(park => <Park key={park.parkId} park={park} onDeletePark={deletePark} onEditPark={editPark}/>) : <h1>{error}</h1>} */}
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

ParkList.propTypes = {
  parkList: PropTypes.array,
  onParkSelection: PropTypes.func
};

export default ParkList;