import React from 'react';
import settings from './../assets/imgs/settings.svg';
import { Link } from 'react-router-dom';
import GardenName from './GardenName';
import GardenList from './GardeList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function GardenListContainer(props){
  console.log('this is props passed' + props.name);

  // let newGardenItem = null;
  //
  //   console.log(props.addedToGarden);
  //
  //   <div className="plant-garden-loop">
  //     {Object.keys(props.plantData).map(function(plantId){
  //       let singleGardenItem = props.plantData[plantId];
  //       if (props.addedToGarden === true) {
  //
  //         newGardenItem = <Garden
  //           name={singleGardenItem.name}
  //           id={plantId}
  //           addedToGarden={singleGardenItem.addedToGarden} />;
  //         }
  //     })}
  //   </div>
  //



  return(
    <div>
      <div className="garden">
        <h3>Garden</h3>
        <GardenName/>

          <div>
            {newGardenItem}
          </div>


      </div>
      <style jsx>{`
        .garden {
          margin-top: 0rem;
          margin: auto;
          height: 565px;
        }

        .plant-garden-loop {
          margin-top: 2rem;
          height: 90px;
          width: 100%;
          background-color: #EBAFA4;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

      `}
      </style>

    </div>
  );
};

GardenListContainer.propTypes = {
  plantData: PropTypes.object,
  dispatch: PropTypes.func,
  selectedPlant: PropTypes.string,
  name: PropTypes.string,
  plantInGarden: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    plantInGarden: state.plantInGarden
  };
};

export default connect(mapStateToProps)(GardenListContainer);
