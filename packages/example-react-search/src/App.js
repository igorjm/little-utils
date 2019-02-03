import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: 'teste',
    };
  }
  render() {
    return (
      <div className="App">
        <SearchInput searchCriteria={this.state.searchCriteria} />
        <b>{ this.state.searchCriteria }</b>
        <SearchResult />
      </div>
    );
  }
}

export default App;
