import React from 'react';
import { Link } from 'react-router-dom';

function CalendarAdd(){

  return(
    <div>
      <div className="calendar-add">
        <h3>Calendar Add</h3>
          <div className="calendar-btns">
            <Link to='/calendar-edit'><button type="button" className="edit-cal">EDIT</button></Link>
            <Link to='/calendar-add'><button type="button" className="add-cal">ADD</button></Link>
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
        .edit-cal {
          font-size: .8rem;
          color: white;
          width: 10rem;
          background-color:#0A07DF;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          border: 0px solid;
          opacity: .8;
        }
        .add-cal {
          font-size: .8rem;
          color: white;
          width: 10rem;
          background-color:#EBAFA4;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          border: 0px solid;
          opacity: .8;
        }

      `}
      </style>


    </div>
  );
}

export default CalendarAdd;
