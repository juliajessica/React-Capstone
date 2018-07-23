import React from 'react';
import PropTypes from 'prop-types';
import plantSVG from './../assets/imgs/pagelines.svg';


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
function PlantDescription(props){

  return(
    <div>
      <h1>plant description</h1>
      <h2><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{props.name}</h2>
      <div className="plant-desc-img">
        <img src={props.image} alt="image of plant" className="plant-desc-imgResize" />
      </div>
      <style jsx>{`
        .plant-desc-img {
          display: block;
          overflow: hidden;
          height: 100px;
          width: 100px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .plant-desc-imgResize {
          width: 120px;
        }

        `}
      </style>
    </div>
  );
}


PlantDescription.propTypes = {
  selectedPlant: PropTypes.object,
  dispatch: PropTypes.func,
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

export default PlantDescription;
