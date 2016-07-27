import React, { Component } from 'react';
const axios = require('axios');

export default class Crimes extends Component {

  constructor(props) {
    super(props);
    this.getCrimes = this.getCrimes.bind(this);
  }

  getCrimes(time) {
    var headers = {
     'Content-Type': 'application/json'
     // 'params': { time: time }
    }

    axios.post('http://localhost:3001', {
      params: {
        time: time
      }
    })
      .then((res) => {
        console.log('RESPONSE:', time, res);
      })
      .catch((err) => {
        console.log('ERROR:', err);
      });
  }

  render() {
    return (
      <div className="Crimes"> 
        {this.getCrimes(this.props.sliderValue)}
      </div>
    )
  }
}