import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

export default class SliderUI extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 12
    };

    this.handleSlider = this.handleSlider.bind(this);
  }

  handleSlider(event, value) {
    this.setState({
      sliderValue: value
    });
  }

  render() {
    return (
      <div className="slider">
        <Slider 
          min={0}
          max={23}
          step={1}
          defaultValue={12}
          value={this.state.secondSlider}
          onChange={this.handleSlider}
        />
        <p>
        <span>{'The value of the slider is: '}</span>
        <span>{this.state.sliderValue}</span>
        </p>
      </div>
    );
  }
}
