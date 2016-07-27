import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from './components/Slider';
import Header from './components/Header';
import Clock from './components/Clock';
import Crimes from './components/Crimes';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 12
    }

    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleCrimes = this.handleCrimes.bind(this);
  }

  handleSliderChange(value) {
    this.setState({
      sliderValue: value
    })
  }

  handleCrimes(value) {
    console.log('APPPPPPP', value)
    this.setState({
      crimes: value
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <br />
          <Clock sliderValue={this.state.sliderValue}/>
          <Slider 
            onSliderChange={this.handleSliderChange} 
            sliderValue={this.state.sliderValue}
          />
          <Crimes 
            onCrimes={this.handleCrimes}
            sliderValue={this.state.sliderValue}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
