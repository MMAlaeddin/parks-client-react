import React from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {
  function handleSearch(event) {
    event.preventDefault();
    props.onSearchSubmit({
      state: event.target.name.value
    });
  }
  return (
    <form onSubmit = { handleSearch }>
      <h1>National Parks</h1>
      <h4>Search Engine</h4>
      <h3>National Park Name: </h3>
      <input type="text" name="name" />
      <h3>State: </h3>
      <input type="text" name="state" />
      <button type="submit">Find Park!</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func
}

export default SearchForm;