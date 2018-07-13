import React from 'react';
import Nav from './Nav';

function Calendar(){

  return(
    <div>
      <div className="calendar">
        <h1>Calendar</h1>
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
