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
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/plant-search' component={PlantSearch}/>
          <Route component={Error404}/>
        </Switch>
        <style jsx>{`
          .App {
            margin: auto;
            padding: 0 3rem;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
