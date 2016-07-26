import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './handcuffs.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from './components/Slider';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Crime Time</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Slider />
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
