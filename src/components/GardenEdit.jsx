import React from 'react';
import GardenName from './GardenName';

function GardenEdit(){

  return(
    <div>
      <div className="garden-edit">
        <h3>Garden Edit</h3>
        <GardenName/>
        <div className="user-name-edit">

        </div>
        <div className="vertile-line"></div>

      </div>
      <style jsx>{`
        .garden-edit {
          margin-top: 0rem;
          margin: auto;
          height: 565px;
        }
        .user-name-edit{

        }
        .user-name-edit p{

        }

      `}
      </style>


    </div>
  );
}

export default GardenEdit;
