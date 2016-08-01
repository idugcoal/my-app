import React, { Component } from 'react';
import Chart from './Chart';
const axios = require('axios');


export default class Crimes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      crimes: '',
    }

    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    const crimeApiUrl = "https://data.lacity.org/resource/y9pe-qdrd.json?$where=date_occ%20between%20%272015-10-01T12:00:00%27%20and%20%272016-01-01T00:00:00%27";
    this.serverRequest = axios.get(crimeApiUrl)
      .then((res) => {
        this.setState({crimes: res.data})
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  renderList(crimes, time) {
    
    let crimeCounts = {};
    let crimesByHour = crimes.filter(crime => Math.floor(crime.time_occ / 100) === time);

    crimesByHour.forEach((crime) => {
      if(crimeCounts.hasOwnProperty(crime.crm_cd)) {
        crimeCounts[crime.crm_cd]++;
      } else {
        crimeCounts[crime.crm_cd] = 1;
      }
    });

    // console.log('crimeCounts', crimeCounts);

    return (
      <div>
        <Chart crimeCounts={crimeCounts} />
      </div>
    )
  }

  render() {
    if(this.state.crimes === '') return <div> TESTING 123... </div>
    return (
      <div className="Crime"> 
        <h1>CRIME</h1>
        {this.renderList(this.state.crimes, this.props.sliderValue)}
      </div>
    )
  }
}