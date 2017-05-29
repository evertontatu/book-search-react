import React, { Component } from 'react';
import Search from './components/Search';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Books Search</h1>
        <Search/>
      </div>
    );
  }
}