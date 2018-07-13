import React from 'react';
import Nav from './Nav';

function PlantSearch(){

  return(
    <div>
      <div className="plant-Search">
        <h1>PlantSearch</h1>
        <form>
          <input type="text" placeholder="SEARCH:" className="search-input"></input>
        </form>
      </div>
      <Nav/>
      <style jsx>{`
        .plant-Search{
          padding: 0 2rem;
          height: 562px;
        }
        .search-input {
          padding: .7rem;
          font-size: 1rem;
          border-radius: 5px;
          margin: .4rem 0;
          width: 20rem;
          border: 0px solid;

        }

        input[type=text] {
          color: white;
          background-color: #E18472;
        }
      `}
      </style>


    </div>
  );
}

export default PlantSearch;

//<PlantDescription />
