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