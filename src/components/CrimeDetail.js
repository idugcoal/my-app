// import React, { Component } from 'react';
// import '../App.css';
// const d3 = require('d3');

// // const codes = require('../../codes.json');

// // console.log(d3);
// export default class CrimeDetail extends Component {

//   constructor(props) {
    
//     super(props);

//     this.state = {
//       colors: ['#68e861', '#e86168', '#e8a061', '#616fe8'],
//       margin: {top: 20, right: 20, bottom: 70, left: 40},

//     };

//     this.renderList = this.renderList.bind(this);
//   }

//   renderList(crimes, time) {
    
//     let crimeCounts = {};
//     let crimesByHour = crimes.filter(crime => Math.floor(crime.time_occ / 100) === time);

//     crimesByHour.forEach((crime) => {
//       if(crimeCounts.hasOwnProperty(crime.crm_cd)) {
//         crimeCounts[crime.crm_cd]++;
//       } else {
//         crimeCounts[crime.crm_cd] = 1;
//       }
//     });

//     console.log('crimeCounts', crimeCounts, d3);
//     // start of d3 

//     // let width = 600 - this.state.margin.left - this.state.margin.right;
//     // let height = 300 - this.state.margin.top - this.state.margin.bottom;

//     // let x = d3.scaleOrdinal().rangeRoundBands([0, width], .05);
//     // let y = d3.scaleLinear().range([height, 0]);

//   }

//   render() {
    
//     if(this.props.crimesArray === undefined) return <div> loading... </div>
//     else {
//       return (
//         <div className="Crimes"> 
//           {this.renderList(this.props.crimesArray, this.props.time)}
//         </div>
//       )
//     }
//   }

// } 