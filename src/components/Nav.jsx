import React from 'react';
import Home from '../assets/imgs/home.svg';
import Spa from '../assets/imgs/spa.svg';
import User from '../assets/imgs/user.svg';
import Calendar from '../assets/imgs/calendar.svg';


function Nav(){

  return(
    <div className="navBar">
      <img src={Home} alt="home"/>
      <img src={Calendar} alt="calendar"/>
      <img src={Spa} alt="garden"/>
      <img src={User} alt="profile"/>

    <style jsx>{`
      .navBar{
        padding: 2rem;
        height: 60px;
        width: 100%;
        color:red;
        background-color: #FAD961;
      }
      .navBar img{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

      }

    `}
    </style>


    </div>
  );
}

export default Nav;
