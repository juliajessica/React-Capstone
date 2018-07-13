import React, { Component } from 'react';
import Login from './Login.jsx';
import Error404 from './Error404';
import PlantSearch from './PlantSearch';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>app</h1>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/plant-search' component={PlantSearch}/>
          <Route component={Error404}/>
        </Switch>


        <style jsx global>{`
          body {
            margin: 0;
            padding: 0 25px;
            font-family: sans-serif;
          }
          h2 {
            color: magenta;
          }
        `}
       </style>
      </div>
    );
  }
}

export default App;
//<Nav/>
//<PlantDescription />
