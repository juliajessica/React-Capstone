import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('react-app-root'));
registerServiceWorker();


// import App from './components/App';
// import { AppContainer } from 'react-hot-loader';
// import { HashRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
