import React from 'react';
import settings from './../assets/imgs/settings.svg';
import { Link } from 'react-router-dom';
import GardenName from './GardenName';
import GardenList from './GardenList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function GardenListContainer(props){
  console.log('this is props passed' + props.name);

  return(
    <div>
      <div className="plant-garden-loop">
        <h3>Garden</h3>
        <GardenName/>
          {Object.keys(props.plantData).map(function(plantId){
              let singleGardenItem = props.plantData[plantId];

            return (
              <GardenList
                name={singleGardenItem.name}
                id={plantId}
                addedToGarden={singleGardenItem.addedToGarden} />
            );
          })}
       </div>

      <style jsx>{`
        .plant-garden-loop {
          margin-top: 0rem;
          margin: auto;
          height: 565px;
        }

      `}
      </style>

    </div>
  );
};

GardenListContainer.propTypes = {
  plantData: PropTypes.object,
  selectedPlant: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    plantInGarden: state.plantInGarden
  };
};

export default connect(mapStateToProps)(GardenListContainer);
