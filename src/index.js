import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
//import { createStore } from 'redux';
//const store = createStore(rootReducer);
//console.log(store.getState());
//import { Provider } from 'react-redux';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
  registerServiceWorker();
};

render(App);

//<Provider store={ store }>
//</Provider>

/* eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
