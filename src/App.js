import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Slider from './components/Slider';
import Header from './components/Header';
import Clock from './components/Clock';
import Crimes from './components/Crimes';
import CrimeDetail from './components/CrimeDetail';
import Chart from './components/Chart'; 
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
  }

  handleSliderChange(value) {
    this.setState({
      sliderValue: value
    })
  }

  // handleCrimes(value) {
  //   this.setState({
  //     crimes: value
  //   })
  // }

  // handleCrimeCounts(crimeCounts) {
  //   console.log('HANDLED', crimeCounts);
  //   // this.setState({
  //   //   crimeCounts: crimeCounts
  //   // })
  // }

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
          <Clock sliderValue={this.state.sliderValue}/>
          <Slider 
            onSliderChange={this.handleSliderChange} 
            sliderValue={this.state.sliderValue}
          />
          <Crimes 
            sliderValue={this.state.sliderValue}
          />
          <CrimeDetail 
            crimesArray={this.state.crimes} 
            time={this.state.sliderValue}
            // onCrimeCounts={this.handleCrimeCounts}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
