import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render () {
    return (
      <input type="text" placeholder="search a gif" className="form-search form-control"  onChange={this.handleUpdate} />
    );
  }
}


export default SearchBar;
