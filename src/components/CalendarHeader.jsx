import React from 'react';
import CurrentDate from './CurrentDate';

function CalendarHeader(){

  return(
    <div>
      <div className="garden-user-name">
        <p>JULY</p><CurrentDate/>
      </div>
      <div className="verticle-line"></div>
      <style jsx>{`
        .garden-user-name {
          padding: 0 1.3rem;
          background-color: #F9D7B5;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 2.6rem;
          color: white;
        }
        .garden-user-name img {
          padding: 0 1.3rem;
        }
        .verticle-line {
          height: .6rem;
          width: 100%;
          background-color: #EBAFA4;
        }
      `}
      </style>
    </div>
  );
}

export default CalendarHeader;
