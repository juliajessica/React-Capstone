import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

function plantList(){

  return(
    <div>
      <h1>plant list</h1>

    </div>
  );
}


PlantList.propTypes = {
  plantData: PropTypes.object,
  //dispatch: PropTypes.func
};

export default plantList;
