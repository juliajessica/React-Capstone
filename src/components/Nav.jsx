import React from 'react';
import Home from '../assets/imgs/home.svg';
import Spa from '../assets/imgs/spa.svg';
import User from '../assets/imgs/user.svg';
import Calendar from '../assets/imgs/calendar.svg';
import { Link } from 'react-router-dom';


function Nav(){

  return(
    <div className="navBar">
      <div className="navImgs">
        <Link to='/plant-search'><img src={Home} alt="home"/></Link>
        <Link to='/calendar'><img src={Calendar} alt="calendar"/></Link>
        <Link to='/garden'><img src={Spa} alt="garden"/></Link>
        <Link to='/profile'><img src={User} alt="profile"/></Link>
      </div>

    <style jsx>{`
      .navBar{
        padding: 1rem;
        height: 60px;
        width: 100%;
        color:red;
        background-color: #FAD961;
      }
      .navImgs{
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-basis: auto;
        align-content: center;
        place-content: start space-evenly;
      }
      .navImgs img{
        align-items: center;
      }

    `}
    </style>


    </div>
  );
}

export default Nav;
