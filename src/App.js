import React, { Component } from 'react';
import Search from './components/Search';

import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Google Books Search</h1>
          </div>
        </div>
        <div className="container">
          <Search/>
        </div>
      </div>
      
    );
  }
}
