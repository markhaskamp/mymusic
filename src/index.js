import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { storeReducer } from './reducer/storereducer.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let newStore = createStore(storeReducer);

ReactDOM.render(<App store={newStore} />, document.getElementById('root'));
registerServiceWorker();
