import React from 'react';
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
          <p>{props.name}</p>
        </div>
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
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
  };
};

export default connect(mapStateToProps)(GardenList);
