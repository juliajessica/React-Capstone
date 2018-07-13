import React from 'react';
import Home from '../assets/imgs/home.svg';
import Spa from '../assets/imgs/spa.svg';
import User from '../assets/imgs/user.svg';
import Calendar from '../assets/imgs/calendar.svg';


function Nav(){

  return(
    <div className="navBar">
      <div className="navImgs">
        <img src={Home} alt="home"/>
        <img src={Calendar} alt="calendar"/>
        <img src={Spa} alt="garden"/>
        <img src={User} alt="profile"/>
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
