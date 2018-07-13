import React from 'react';
import Nav from './Nav';

function Garden(){

  return(
    <div>
      <div className="garden">
        <h1>Garden</h1>
      </div>
      <Nav />
      <style jsx>{`
        .garden {
          padding: 0 2rem;
          height: 562px;
        }
      `}
      </style>


    </div>
  );
}

export default Garden;
