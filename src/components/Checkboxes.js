import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
const crimeCodes = require('../../codes.json');

export default class Checkboxes extends Component {

	constructor(props) {
		super(props)

		console.log(crimeCodes);
	}

	render() {
		return (
			<div className="Checkboxes">
				{crimeCodes.map((crime) => {
					return (
						<Checkbox 
							label={crime.crime} 
							// checked={crime.checked}
							onCheck={this.props.onCheck}
						/>
					)
				})}
			</div>
		)
	}
}