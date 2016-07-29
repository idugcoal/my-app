import React, { Component } from 'react';
const axios = require('axios');

export default class Crimes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      crimes: [
      {"time_occ": 855, "dr_no": 1},
      {"time_occ": 855, "dr_no": 2},
      {"time_occ": 855, "dr_no": 3},
      {"time_occ": 855, "dr_no": 4},
      {"time_occ": 855, "dr_no": 5},
      ]
    }
    this.getCrimes = this.getCrimes.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.serverRequest = axios.get("https://data.lacity.org/resource/y9pe-qdrd.json?$where=date_occ%20between%20%272015-10-01T12:00:00%27%20and%20%272016-01-01T00:00:00%27")
      .then((res) => {
        // console.log('res.data', res.data);
        this.props.onCrimes(res.data);
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  getCrimes(time) {
    console.log(time, this.state.crimes.length);
    // this.state.crimes.map((crime) => {
    //   console.log(crime.area);
    // })
  }

  renderList(time) {
    // console.log('crimes[0]', this.state.crimes[0]);
    return (
      {time}
    )
  }

  render() {
    return (
      <div className="Crime"> 
      </div>
    )
  }
}