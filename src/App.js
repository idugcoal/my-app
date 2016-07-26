import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from './components/Slider';
import Header from './components/Header';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <span className="App-intro">
            Move the slider to change the time
          </span>
          <Slider />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
