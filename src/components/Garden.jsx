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

      `}
      </style>

    </div>
  );
}

Garden.propTypes = {
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

export default connect(mapStateToProps)(Garden);
