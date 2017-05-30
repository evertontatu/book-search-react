import React, { Component } from 'react';
import '../css/Favorite.css';

export default class Favorite extends React.Component {
  render() {
    return (
      <svg>
        <circle cx={50} cy={50} r={10} fill="red" />
      </svg>
    );
  }
}