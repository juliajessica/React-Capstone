import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Calendar(){

  return(
    <div>
      <div className="calendar">
        <h3>Calendar</h3>
          <div className="calendar-btns">
            <Link to='/plant-search'><button type="button">SIGN IN</button></Link>
            <button type="button">SIGN UP</button>
          </div>
      </div>
      <Nav />
      <style jsx>{`
        .calendar {
          padding: 0 2rem;
          height: 562px;
        }
      `}
      </style>


    </div>
  );
}

export default Calendar;
