import React from 'react';
import Nav from './Nav';

function CalendarEdit(){

  return(
    <div>
      <div className="calendar-edit">
        <h3>Calendar Edit</h3>

      </div>
      <Nav/>
      <style jsx>{`
        .calendar-edit {
          padding: 0 2rem;
          height: 562px;
        }
      `}
      </style>


    </div>
  );
}

export default CalendarEdit;
