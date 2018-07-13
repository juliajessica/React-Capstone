import React, { Component } from 'react';
import Login from './Login.jsx';
import Error404 from './Error404';
import PlantSearch from './PlantSearch';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <style jsx>{`
          body {
            margin: 0;
            font-family: sans-serif;
          }
          h2 {
            color: magenta;
          }
        `}</style>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/plant-search' component={PlantSearch}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
