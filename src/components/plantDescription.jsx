import React from 'react';
import PropTypes from 'prop-types';

function plantDescription(props){

  return(
    <div>
      <h1>plant description</h1>
      <p>{props.selectedPlant.name}</p>

    </div>
  );
}


plantDescription.propTypes = {
  selectedPlant: PropTypes.object
};

export default plantDescription;
