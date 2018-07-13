import React, { Component } from 'react';
import Error404 from './Error404';
import Login from './Login.jsx';
import PlantSearch from './PlantSearch';
import Calendar from './Calendar';
import Garden from './Garden';
import Profile from './Profile';

import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/plant-search' component={PlantSearch}/>
          <Route path='/garden' component={Garden}/>
          <Route path='/profile' component={Profile}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;

//<style jsx>{`
//   .App {
//     margin: auto;
//     padding: 0 3rem;
//   }
// `}</style>
