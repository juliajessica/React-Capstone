import React from 'react';
import PropTypes from 'prop-types';


//
// //     name={plant.name}
// //     image={plant.image}
// //     description={plant.description}
// //     maintenance={plant.maintenance}
// //     water={plant.water}
// //     exposure={plant.exposure}
// //     growthPeriod={plant.growthPeriod}
// //     bloom={plant.bloom}
// //     key={plantId}
// //     id={plantId}
function plantDescription(props){

  return(
    <div>
      <h1>plant description</h1>
      <p>{props.selectedPlant.name}</p>

    </div>
  );
}


plantDescription.propTypes = {
  selectedPlant: PropTypes.object,
  //dispatch: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  maintenance: PropTypes.string,
  water: PropTypes.string,
  exposure: PropTypes.string,
  growthPeriod: PropTypes.string,
  bloom: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
};

export default plantDescription;
