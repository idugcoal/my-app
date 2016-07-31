import React, { Component } from 'react';
const d3 = require('d3');

export default class Chart extends Component {
	constructor(props) {
		super(props);

	}

	

  render() {
   
 

    return(
    	<div class="container">
	      <div class="row">
	        <div class="col-xs-12">
	        	<div class="top" id="top-line-chart">
	        		<h3>CHART</h3>
	        	</div>
	        </div>
	      </div>
	    </div>
    )
  }
}