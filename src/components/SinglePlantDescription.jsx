import React from 'react';
import PropTypes from 'prop-types';
import plantSVG from './../assets/imgs/pagelines.svg';

function SinglePlantDescription(props){
  console.log(props.description);

  return(
    <div>
      <h1>plant description</h1>
      <h2><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{props.name}</h2>
      <p>Description: {props.description}</p>
      <div className="plant-desc-img">
        <img src={props.image} alt="image of plant" className="plant-desc-imgResize" />

          <p>{props.maintenance}</p>
          <p>{props.water}</p>
          <p>{props.exposure}</p>
          <p>{props.growthPeriod}</p>
          <p>{props.bloom}</p>


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


SinglePlantDescription.propTypes = {
  selectedPlant: PropTypes.object
};

export default SinglePlantDescription;
