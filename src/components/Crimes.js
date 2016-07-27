import React, { Component } from 'react';
const axios = require('axios');

export default class Crimes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      crimes: [1, 2, 3]
    }
    this.getCrimes = this.getCrimes.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    axios.get("https://data.lacity.org/resource/y9pe-qdrd.json?$where=date_occ%20between%20%272015-10-01T12:00:00%27%20and%20%272016-01-01T00:00:00%27")
      .then((res) => {
        console.log('res.data', res.data);
        this.setState({
          crimes: res.data
        });
      })
  }

  getCrimes(time) {
    console.log(time);
    // this.state.crimes.map((crime) => {
    //   console.log(crime.area);
    // })
  }

  renderList(time) {
    console.log(this.state.crimes);
    return this.state.crimes.map((crime, index) => {
      return <div> {index} </div>
    })
  }

  render() {
    return (
      <div className="Crimes"> 
        {this.renderList(this.props.sliderValue)}
      </div>
    )
  }
}