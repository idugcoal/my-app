import React, { Component } from 'react';
import '../App.css';

export default class Clock extends Component {

  render() {
    return (
      <div className="Clock"> {this.props.sliderValue} </div>
    )
  }
}