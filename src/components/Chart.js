import React, { Component } from 'react';
import '../App.css';
// var rd3 = require('react-d3');
var ReactD3 = require('react-d3-components');
const BarChart = ReactD3.BarChart;


export default class Chart extends Component {
	constructor(props) {
		super(props);

		this.formatData = this.formatData.bind(this);
	
	}

	formatData(crimeCounts) {
		let obj = {};
		let values = [];
		obj.label = 'Crimes';
		Object.keys(crimeCounts).map((key) => {
			values.push({
				x: key,
				y: crimeCounts[key]
			})
		})
		obj.values = values
		
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
    			width={1400}
				  height={400}
				  margin={{top: 10, bottom: 50, left: 50, right: 10}}
    		/>
	    </div>
    )
  }
}