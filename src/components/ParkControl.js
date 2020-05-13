import React from 'react';
import NewParkForm from './NewParkForm';
import ParkList from './ParkList';
import ParkDetail from './ParkDetail';
import EditParkForm from './EditParkForm';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';



class ParkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      searchName: null,
      searchState: null,
      formVisibleOnPage: false,
      masterParkList: [],
      selectedPark: null,
      editing:false
    };
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

  handleAddinNewPakToList = (newPark) => {
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


}
