import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import settings from './../assets/imgs/settings.svg';
import GardenName from './GardenName';
import GardenList from './GardenList';

function GardenListContainer(props){


  return(
    <div>
      <div className="plant-garden-loop">
        <h3>Garden</h3>
        <GardenName/>

        <div className="single-garden-item">
          {Object.keys(props.plantData).map(function(plantId){
            let singleGardenItem = props.plantData[plantId];

              if (singleGardenItem.addedToGarden === true) {
                return <GardenList
                         name={singleGardenItem.name}
                         image={singleGardenItem.image}
                         id={plantId}
                       />;
              }

          })}
        </div>
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
  };
};

export default connect(mapStateToProps)(GardenListContainer);
