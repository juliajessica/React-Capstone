import React from 'react';
import Nav from './Nav';

function CalendarToday(){

  return(
    <div>
      <div className="calendar-today">
        <h3>Calendar Today</h3>

      </div>
      <Nav/>
      <style jsx>{`
        .calendar-today {
          padding: 0 2rem;
          height: 562px;
        }
      `}
      </style>


    </div>
  );
}

export default CalendarToday;
