import React from 'react';
import Nav from './Nav';

function CalendarAdd(){

  return(
    <div>
      <div className="calendar-add">
        <h3>Calendar Add</h3>

      </div>
      <Nav/>
      <style jsx>{`
        .calendar-add  {
          padding: 0 2rem;
          height: 562px;
        }

      `}
      </style>


    </div>
  );
}

export default CalendarAdd;
