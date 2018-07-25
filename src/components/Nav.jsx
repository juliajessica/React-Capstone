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
        <Link to='/personal-garden'><img src={Spa} alt="garden"/></Link>
        <Link to='/profile'><img src={User} alt="profile"/></Link>
      </div>

    <style jsx>{`
      .navBar{
        padding: 1rem 0;
        height: 60px;
        width: 100%;
        background-image: linear-gradient(to bottom, #FAD961, #E18652);
        position: fixed;
      }
      .navImgs{
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-basis: auto;
        align-items: center;
        justify-content: space-around;
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
