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
    this.getCrimeCounts = this.getCrimeCounts.bind(this);
  }

  getCrimesByHour(crimes, time) {

    return crimes.filter((crime) => {
      return (Math.floor(crime.time_occ / 100) === time)
    })
  }

  getCrimeCounts(crimes) {
    return crimes.reduce((counts, crime) => {
      if(counts.hasOwnProperty(crime.crm_cd)) {
        return counts[crime.crm_cd]++;
    console.log('hello')
      } else {
        counts[crime.crm_cd] = 1;
        return counts;
      }
    }, {})
  }

  renderList(crimes, time) {
    
    if(crimes === undefined) return '';
    // let crimeCounts = {};
    let crimesByHour = this.getCrimesByHour(crimes, time);
    let crimeCounts = this.getCrimeCounts(crimesByHour);
    // crimesByHour.forEach((crime) => {
    //   // console.log(crime.crm_cd)
    //   if(crimeCounts.hasOwnProperty(crime.crm_cd)) crimeCounts[crime.crm_cd]++;
    //   else crimeCounts[crime.crm_cd] = 1;
    //   // console.log('crimeCounts', crimeCounts);
    // })

    console.log('results', crimeCounts)
      for(key in crimeCounts) {
        if(crimeCounts.hasOwnProperty(key)) {
        console.log(key);
        //   return (
        //     <div 
        //       className="CrimeBox"
        //       style={{"borderColor": this.state.colors[index % 4]}}
        //     >
        //     {key} 
        //     </div>
        //   )
      }
    }

    // return crimesByHour.map((filteredCrimes, index) => {
    //   return (
    //     <div 
    //       className="CrimeBox"
    //       key={filteredCrimes.dr_no} 
    //       style={{"borderColor": this.state.colors[index % 4]}}
    //     >
    //       {filteredCrimes.crmcd_desc}
    //     </div>
    //   )        
    // })

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