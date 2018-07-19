import React, { Component } from 'react';
import Error404 from './Error404';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import PasswordReset from './PasswordReset';
import PlantSearch from './PlantSearch';
import SinglePlant from './SinglePlant';
import PlantDescription from './PlantDescription';
import Calendar from './Calendar';
import CalendarAdd from './CalendarAdd';
import CalendarEdit from './CalendarEdit';
import CalendarToday from './CalendarToday';
import Garden from './Garden';
import GardenEdit from './GardenEdit';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';

import './App.css';
import { Route, Switch } from 'react-router-dom';

class Router extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/sign-up' component={SignUp}/>
          <Route exact path='/password-reset' component={PasswordReset}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/calendar-edit' component={CalendarEdit}/>
          <Route path='/calendar-add' component={CalendarAdd}/>
          <Route path='/calendar-today' component={CalendarToday}/>
          <Route path='/plant-search' component={PlantSearch}/>
          <Route path='/plant' component={SinglePlant}/>
          <Route path='/plant-detail' component={PlantDescription}/>
          <Route path='/garden' component={Garden}/>
          <Route path='/garden-edit' component={GardenEdit}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/profile-edit' component={ProfileEdit}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
