import React, { Component } from 'react';
import '../App.css';
const d3 = require('d3');

// const codes = require('../../codes.json');

// console.log(d3);
export default class CrimeDetail extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      colors: ['#68e861', '#e86168', '#e8a061', '#616fe8']
    };

    this.renderList = this.renderList.bind(this);
    this.getCrimesByHour = this.getCrimesByHour.bind(this);
    // this.getCrimeCounts = this.getCrimeCounts.bind(this);
  }

  getCrimesByHour(crimes, time) {

    return crimes.filter((crime) => {
      return (Math.floor(crime.time_occ / 100) === time)
    })
  }

  // getCrimeCounts(crimes) {
  //   return crimes.reduce((counts, crime) => {
  //     if(counts.hasOwnProperty(crime.crm_cd)) {
  //       return counts[crime.crm_cd]++;
  //     } else {
  //       counts[crime.crm_cd] = 1;
  //       return counts;
  //     }
  //   }, {})
  // }

  renderList(crimes, time) {
    
    if(crimes === undefined) return '';
    
    let crimeCounts = {};
    let crimesByHour = this.getCrimesByHour(crimes, time);
    
    crimesByHour.forEach((crime) => {
      if(crimeCounts.hasOwnProperty(crime.crm_cd)) {
        crimeCounts[crime.crm_cd]++;
      } else {
        crimeCounts[crime.crm_cd] = 1;
      }
    });
      // this.setState({crimeCounts: crimeCounts});

    console.log('crimeCounts', crimeCounts);


    }

  render() {
    
    if(this.props.crimesArray === undefined) return <div> testing </div>
    else {
      return (
        <div className="Crimes"> 
          {this.renderList(this.props.crimesArray, this.props.time)}
        </div>
      )
    }
  }

} 