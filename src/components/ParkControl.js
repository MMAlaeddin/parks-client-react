import React from 'react';
import NewParkForm from './NewParkForm';
import ParkList from './ParkList';
import ParkDetail from './ParkDetail';
import EditParkForm from './EditParkForm';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
import PropTypes from 'prop-types';



class ParkControl extends React.Component {

  constructor(props) {
    super(props);
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
  

  handleClick = () => {
    if(this.this.state.selectedPark !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPark: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewPakToList = (newPark) => {
    const newMasterParkList = this.state.masterParkList.concat(newPark);
    this.setState({
      masterParkList: newMasterParkList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectPark = (id) => {
    const selectedPark = this.state.masterParkList.filter(park => park.id === id)[0];
    this.setState({
      selectedPark: selectedPark
    });
  }

  handleDeletingPark = (id) => {
    const newMasterParkLits = thistory.state.masterParkList.filter(park => park.id !== id);
    this.setState({
      masterParkList: newMamasterParkList,
    selectedPark: null
    }); 
  }

  handleEditClick = () => {
    this.setState({editing:true})
  }

  handleEditingParkList = (parkToEdit) => {
    const editedMasterParkList = this.state.masterParkList.filter(park => park.id !== this.state.selectedPark.id).concat(parkToEdit); 
    this.setState({
      masterParkList: editedMasterParkList,
      editing: false,
      selectedPark: null
    });
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
            <h3>{park.name}</h3>
            <p
        >{park.city})}
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
      buttonText = "Return to Park List";}
     else {
      currentlyVisibleState = <ParkList
    }}
  }

  ParkControl = connect(mapstaeToProps)(ParkControl);
  
  ParkControl.propTypes = {
      masterParkList: PropTypes.object
  };

  const mapstaeToProps = state => {
      return {
          masterParkList: state.masterParkList,
          formVisibleOnPage: state.formVisibleOnPage
      }
  }
}

export default ParkControl;
