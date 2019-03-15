import React, { Component } from 'react';
import logo from './logo.svg';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './components/appBar'
import SimpleAppBar from './components/secondAppBar'
import OutlinedButtons from './components/buttons'
import OutlinedTextFields from'./components/textFields'

import './App.css';

const styles = {};

class App extends Component {
  render() {
    return(
      <div className="App">
        <ButtonAppBar/>
          <SimpleAppBar/>
          <OutlinedTextFields/>
          <OutlinedButtons/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello world  <code>src/App.js</code> and save to reload .
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
<Button/>
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
