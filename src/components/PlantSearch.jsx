import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import plantSVG from './../assets/imgs/pagelines.svg';
//<div className="singlePlant" onCLick=''>
  //<img src={} />

  //</div>

function PlantSearch(){

  return(
    <div>
      <div className="plant-Search">
        <h3>Plant Search</h3>
        <form>
          <input type="text" placeholder="SEARCH:" className="search-input"></input>

            <h2 className="plant-name"><img src={plantSVG} className="leaf-icon"/>will have plant name</h2>

          <Link to='/plant-detail'><button>Details</button></Link>
        </form>
      </div>
      <Nav/>
      <style jsx>{`
        .plant-Search{
          padding: 0 2rem;
          height: 565px;
        }
        .search-input {
          padding: .5rem;
          font-size: .8rem;
          border-radius: 5px;
          margin: .4rem 0;
          width: 20rem;
          border: 0px solid;
        }

        input[type=text] {
          color: white;
          background-color: #E18472;
        }
        .leaf-icon {
          height: 20px;
          padding: 0 1rem;
          width: auto;
        }
        .plant-name {
          text-transform: uppercase;
        }
      `}
      </style>


    </div>
  );
}

export default PlantSearch;

//<PlantDescription />
