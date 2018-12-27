import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Translate>Welcome to React</Translate></h2>
        </div>
        <p className="App-intro">
          <Translate>To get started, edit</Translate> <code>src/App.js</code> <Translate>and save to reload.</Translate>
        </p>
        <div>
          <button onClick={reactTranslateChangeLanguage.bind(this, 'en')}>
            English
          </button>
          <button onClick={reactTranslateChangeLanguage.bind(this, 'hi')}>
          हिंदी
          </button>
          
        </div>
      </div>
    );
  }
}

export default App;