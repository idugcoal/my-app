import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from './components/Slider';
import Header from './components/Header';
import Clock from './components/Clock'
import './App.css';

injectTapEventPlugin();

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 12
    }

    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(value) {
    this.setState({
      sliderValue: value
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Slider 
            onSliderChange={this.handleSliderChange} 
            sliderValue={this.state.sliderValue}
          />
          <Clock sliderValue={this.state.sliderValue}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
