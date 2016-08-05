import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Slider from './components/Slider';
import Header from './components/Header';
import Clock from './components/Clock';
import Crimes from './components/Crimes';
import Checkboxes from './components/Checkboxes'
// import CrimeDetail from './components/CrimeDetail';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 12
    }

    this.handleSliderChange = this.handleSliderChange.bind(this);
    // this.handleCrimes = this.handleCrimes.bind(this);
    // this.handleCrimeCounts = this.handleCrimeCounts.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleSliderChange(value) {
    this.setState({
      sliderValue: value
    })
  }

  handleCheck(event, isInputChecked) {
    console.log(event, isInputChecked)
  }

  render() {

    const muiTheme = getMuiTheme({
      slider: {
        trackSize: 4,
        trackColor: '#222',
        trackColorSelected: '#222',
        handleSize: 24,
        handleSizeActive: 20,
        handleColorZero: '#68E861',
        handleFillColor: '#68E861',
        selectionColor: '#68E861',
        rippleColor: '#e86168'
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header />
          <br />
          <Clock sliderValue={this.state.sliderValue} />
          <Checkboxes onCheck={this.handleCheck} />
          <Slider 
            onSliderChange={this.handleSliderChange} 
            sliderValue={this.state.sliderValue}
          />
          <Crimes 
            sliderValue={this.state.sliderValue}
            checkboxes={this.state.checkboxes}
           />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
