import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import settings from './../assets/imgs/settings.svg';
import GardenName from './GardenName';


function Garden(props){
  console.log('this is props passed' + props.name);
  return(
    <div>
      <div className="garden">
        <GardenName/>
          <div className="plant-garden">
            <h1>{props.name}</h1>
            <Link to='/garden-edit'><img src={settings} alt="setting icon to edit garden"/></Link>
          </div>

      </div>
      <style jsx>{`
        .garden {
          margin-top: 0rem;
          margin: auto;
          height: 565px;
        }
        .plant-garden img{
          padding-right: 1rem;
        }
        .add-icon {
          padding: 1rem;
        }
        .plant-garden {
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
}

Garden.propTypes = {
  plantData: PropTypes.object,
  dispatch: PropTypes.func,
  selectedPlant: PropTypes.string,
  // name: PropTypes.string,
  // plantInGarden: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    plantInGarden: state.plantInGarden,
    addToGarden: state.addToGarden
  };
};

export default connect(mapStateToProps)(Garden);
