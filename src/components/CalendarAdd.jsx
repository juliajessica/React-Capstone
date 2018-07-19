import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from './EditButton';
import AddButton from './AddButton';

function CalendarAdd(){

  return(
    <div>
      <div className="calendar-add">
        <h3>Calendar Add</h3>
          <div className="calendar-btns">
            <EditButton/>
            <AddButton/>
          </div>

      </div>
      <style jsx>{`
        .calendar-add  {
          padding: 0 2rem;
          height: 565px;
        }
        .calendar-btns {
          display: grid;
          grid-gap: 5px;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          grid-auto-rows: 75px;
          grid-auto-flow: dense;
        }
      `}
      </style>


    </div>
  );
}

export default CalendarAdd;
