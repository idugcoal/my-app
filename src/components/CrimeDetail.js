import React, { Component } from 'react';
import '../App.css';

const codes = require('../../codes.json');

export default class CrimeDetail extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      colors: ['#68e861', '#e86168', '#e8a061', '#616fe8']
    };

    this.renderList = this.renderList.bind(this);
    this.getCrimesByHour = this.getCrimesByHour.bind(this);
  }

  getCrimesByHour(crimes, time) {

    return crimes.filter((crime) => {
      return (Math.floor(crime.time_occ / 100) === time)
    })
  }

  renderList(crimes, time) {
    
    if(crimes === undefined) return '';

    var crimesByHour = this.getCrimesByHour(crimes, time);
    return crimesByHour.map((filteredCrimes, index) => {
      return (
        <div 
          className="CrimeBox"
          key={filteredCrimes.dr_no} 
          style={{"borderColor": this.state.colors[index % 4]}}
        >
          {filteredCrimes.crmcd_desc}
        </div>
      )        
    })

    }

  render() {
    
    return (
      <div className="Crimes"> 
        {this.renderList(this.props.crimesArray, this.props.time)}
      </div>
    )
  }

} 