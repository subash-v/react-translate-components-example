# react-translate-components-example
Install
npm install --save translate-components
How to use
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TranslateProvider } from 'translate-components'
import './index.css';
import translations from './translations.json'

ReactDOM.render(
  <TranslateProvider translations={translations} defaultLanguage={'en'}>
    <App />
  </TranslateProvider>,
  document.getElementById('root')
);
Wrap your application with TranslateProvider, pass the translations and the default language of your application.

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
          <button onClick={reactTranslateChangeLanguage.bind(this, 'es')}>
            Spanish
          </button>
          <button onClick={reactTranslateChangeLanguage.bind(this, 'de')}>
            German
          </button>
        </div>
      </div>
    );
  }
}

export default App;
Use Translate component to wrap the text you want to translate. Use reactTranslateChangeLanguage to change the language of your application. Pass to reactTranslateChangeLanguage function, as first argument, the language. This translate instantly your application!

Of course, you need to have a translation JSON file to pass it to TranslateProvider like this:

{
  "Welcome to React": {
    "es": "Bienvenido a React",
    "de": "Willkommen in React"
  },
  "To get started, edit": {
    "es": "Para empezar, edita",
    "de": "Um loszulegen, bearbeiten"
  },
  "and save to reload.": {
    "es": "y guarda para refrescar la pagina",
    "de": "und speichern, um neu zu laden"
  }
}
By default the Translate component wraps the tranlated text into a <span> element. Additionally, you can use the prop useRawText from the Translate component to render the tranlated text with no wrapping. This will be useful to render the text in elements that don't support nested <span> as well as for other user cases like placeholders in <input> elements. E.g.

<select className="selectClass">
  <option value="phone"><Translate useRawText={true}>Phone</Translate></option>
  <option value="email"><Translate useRawText={true}>Email</Translate></option>
  <option value="textMessage"><Translate useRawText={true}>Text Message</Translate></option>
</select>
