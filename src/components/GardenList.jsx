import React from 'react';
import settings from './../assets/imgs/settings.svg';
import { Link } from 'react-router-dom';
import GardenName from './GardenName';
import Garden from './Garden';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function GardenList(props){
  console.log('this is props passed' + props.name);
  let showNewGardenItem = null;

  if (props.addedToGarden === true) {
    console.log('this should be true' + props.addedToGarden);
    showNewGardenItem =
    <Garden
      name={props.name}
      id={props.id}
      addedToGarden={props.addedToGarden} />;
  }

  return(
    <div>
      <div className="garden-item">
          <div>
            {showNewGardenItem}
          </div>



      </div>
      <style jsx>{`
        .garden-item {
          margin-top: 0rem;
          margin: auto;
          height: 565px;
        }

        `}
      </style>

    </div>
  );
};

GardenList.propTypes = {
  plantData: PropTypes.object,
  dispatch: PropTypes.func,
  selectedPlant: PropTypes.string,
  // selectedPlant: PropTypes.string,
  // name: PropTypes.string,
  // plantInGarden: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    plantInGarden: state.plantInGarden
  };
};

export default connect(mapStateToProps)(GardenList);
