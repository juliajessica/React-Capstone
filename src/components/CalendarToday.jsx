import React from 'react';
import Nav from './Nav';

function CalendarToday(){

  return(
    <div>
      <div className="calendar-today">
        <h3>Calendar Today</h3>

      </div>
      <style jsx>{`
        .calendar-today {
          padding: 0 2rem;
          height: 565px;
        }
      `}
      </style>


    </div>
  );
}

export default CalendarToday;
