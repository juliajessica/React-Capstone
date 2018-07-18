import React from 'react';
import Nav from './Nav';

function GardenEdit(){

  return(
    <div>
      <div className="garden-edit">
        <h3>Garden Edit</h3>
        <div className="user-name-edit">
          <p>JULIA'S GARDEN</p>
        </div>
        <div className="vertile-line"></div>

      </div>
      <style jsx>{`
        .garden-edit {
          height: 565px;
        }
        .user-name-edit{
          background-color: #F9D7B5;
          height: 200px;
          width: 100%;
        }
        .user-name-edit p{
          font-size: 3rem;
        }

      `}
      </style>


    </div>
  );
}

export default GardenEdit;
