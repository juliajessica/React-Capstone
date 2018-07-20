import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './Error404';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import PasswordReset from './PasswordReset';
import PlantSearchContainer from './PlantSearchContainer';
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
import Nav from './Nav.jsx';
//<Route exact path="/" render={() => <Redirect to="/login" />} />

import './App.css';

class Router extends Component {
  render() {
    const LoginContainer = () => (
      <div className="container">
        <Route exact path="/" component={Login} />
      </div>
    )

    const DefaultContainer = () => (
      <div>
      <div className="container">
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/password-reset' component={PasswordReset}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/calendar-edit' component={CalendarEdit}/>
        <Route path='/calendar-add' component={CalendarAdd}/>
        <Route path='/calendar-today' component={CalendarToday}/>
        <Route path='/plant-search' component={PlantSearchContainer}/>
        <Route path='/plant' component={SinglePlant}/>
        <Route path='/plant-detail' component={PlantDescription}/>
        <Route path='/garden' component={Garden}/>
        <Route path='/garden-edit' component={GardenEdit}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/profile-edit' component={ProfileEdit}/>
        <Nav />
      </div>
      </div>

    )
    return (
      <div>
        <div className="app">
          <Switch>
            <Route exact path='/' component={LoginContainer}/>
            <Route component={DefaultContainer}/>
            <Route component={Error404}/>
          </Switch>
        </div>

        <style jsx>{`
          .app{
            height: 565px;
          }
          a:link {
            text-decoration: none;
          }
            `}
        </style>
      </div>
    );
  }
}

export default Router;
