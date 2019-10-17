import React, { Component } from 'react';
import { getSuggestions } from '../api';


class CitySearch extends Component {

  state ={
    query:'',
    suggestions: [],
  }
  
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then(suggestions => this.setState({ suggestions }));
  }

  handleItemClicked = (value) => {
    this.setState({ query: value });
  }

  render() {
    return (
      <div className="CitySearch">
        <input type="text" className="city" onChange={this.handleInputChanged} value={this.state.query} />
        <ul className="suggestions">
          {this.state.suggestions.map(item => 
            <li onClick={() => this.handleItemClicked(item.name_string)}  key={item.name_string}>{item.name_string}</li>)}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
