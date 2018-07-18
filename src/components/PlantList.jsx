import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import plantSVG from './../assets/imgs/pagelines.svg';

function PlantList(){

  return(
    <div>
      <h1>plant list</h1>
      <h2 className="plant-name"><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>will have plant name</h2>

    <Link to='/plant-detail'><button>Details</button></Link>

    </div>
  );
}


PlantList.propTypes = {
  plantData: PropTypes.object,
  //dispatch: PropTypes.func
};

export default PlantList;
