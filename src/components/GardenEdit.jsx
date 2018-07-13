import React from 'react';
import Nav from './Nav';

function GardenEdit(){

  return(
    <div>
      <div className="garden-edit">
        <h3>Garden Edit</h3>

      </div>
      <Nav/>
      <style jsx>{`
        .garden-edit {
          padding: 0 2rem;
          height: 562px;
        }

      `}
      </style>


    </div>
  );
}

export default GardenEdit;
