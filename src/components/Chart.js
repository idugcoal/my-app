import React, { Component } from 'react';
import '../App.css';
var rd3 = require('react-d3');
var ReactD3 = require('react-d3-components');
const BarChart = ReactD3.BarChart;


export default class Chart extends Component {
	constructor(props) {
		super(props);

		this.formatData = this.formatData.bind(this);
	
	}

	formatData(crimeCounts) {
		let data = [];
		let obj = {};
		let values = [];
		obj.label = 'Crimes';
		for(var key in crimeCounts) {
			values.push({
				x: key,
				y: crimeCounts[key]
			})
		}
		obj.values = values

		values.map((a) => {
			// console.log('a', a)
			return a;
		});
		// console.log('RESULTS', ReactD3)
		return obj;
	}
	

  render() {

  	if(this.props.crimeCounts === undefined) return '';
  
   // if(this.state.barData === undefined) return '';
   // console.log(this.state.barData);
    return(
    	<div className="ChartContainer">
    		<BarChart 
    			data={this.formatData(this.props.crimeCounts)}
    			width={1800}
				  height={400}
				  margin={{top: 10, bottom: 50, left: 50, right: 10}}
    		/>
	    </div>
    )
  }
}