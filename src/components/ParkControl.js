import React from 'react'
import ParkList from './ParkList';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
import NewParkForm from './NewParkForm';
import EditParkForm from './EditParkForm';

class ParkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPark: null,
      editing:false
    };
  }

  handleClick = () => {
    if(this.this.state.selectedPark !== null) {
      this.setState({
        selectedPark: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  onSearchSubmit = (searchPark) => {
    const { name, state } = searchPark;
    let nameSearch = (name !== "") ? name : "";
    let stateSearch = (state !== "") ? state : "";
  }
  
  // handleAddingNewParkToList = (newPark) => {
  //   const { dispatch } = this.props;
  //   const action = a.addPArk(newPark)
  //   dispatch(action);
  //   const action2 = a.toggleForm();
  //   dispatch(action2);
  // }

  handleAddingParkToDb = async (park) => {
    await fetch(`https://localhost:5004/api/parks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(park)
    });
    this.setState({newParkFormVisible: false});
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  refreshList = () => {
    this.setState({searched: false, searchName: nameQuery, searchState: stateQuery});
  }
  
  showParkListButton = () => {
    return (this.state.searched) ? <button onClick = { this.refreshList }>Show Me the Parks!</button> : null
  }

  handleChangingSelectPark = (id) => {
    const selectedPark = this.props.masterParkList[id];
    this.setState({
      selectedPark: selectedPark});
  }

  // handleDeletingPark = (id) => {
  //   const { dispatch } = this.props;
  //   const action = a.deletePark(id);
  //   dispatch(action);
  //   this.setState({selectedPark: null});
  // }

  handleDeletingPark = async (id) => {
    await fetch(`https://localhost:5004/api/parks/${id}`, {
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

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleEditingParkList = async (park) => {
    const id = park.parkId;
    await fetch(`https://localhost:5004/api/park/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(park)
    });
    this.setState({
      selectedPark: null,
      editing: false
    })
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }
  
  render(){
    const { error, isLoading, parks } = this.props;
    
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      return (
        <React.Fragment>
          <h1>Parks!</h1>
          <ul>
            {parks.map((park, index) =>
              <li key={index}>
                <h3>{park.name}</h3>
                <p>{park.city}, {park.state}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      )
    }
    
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing) {
      currentlyVisibleState = <EditParkForm park={this.state.selectedPark} onEditPark={this.handleEd}tingParkInList
 />
      buttonText = "Return to Park List";
    }
 else if(this.state.selectedPark != null) {
      currentlyVisibleState = <ParkParkDetail 
      park = {this.state.selectedPark}
      onClickingDelete = {this.handleDeletingPark}
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Park List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewParkForm onNewParkCreation={this.state.handleAddigNewParkToList} />
      buttonText = "Return to Park List";
    } else {
      currentlyVisibleState = <ParkList parkList={this.state.masterParkList} onParkSelection={this.handleChangingSelectPark} />
      buttonText = "Add Park";
    }
  }
}

  ParkControl.propTypes = {
    masterParkList: PropTypes.object
  };
  
  const mapStateToProps = state => {
    return {
      parks: state.parks,
      isLoading: state.isLoading,
      error: state.error
    }
  }

export default connect(mapstateToProps)(ParkControl);
