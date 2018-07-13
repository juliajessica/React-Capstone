import React from 'react';
import Nav from './Nav';

function PlantSearch(){

  return(
    <div>
      <div className="plant-Search">
        <h1>PlantSearch</h1>
      </div>
      <Nav/>
      <style jsx>{`
        .plant-Search{
          padding: 0 2rem;
        }
      `}
      </style>


    </div>
  );
}

export default PlantSearch;

//<PlantDescription />
