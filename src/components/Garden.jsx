import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import settings from './../assets/imgs/settings.svg';
import GardenName from './GardenName';
import RemoveButton from './RemoveButton';
import AddButton from './AddButton';
import arrow from '././../assets/imgs/arrow.svg';


function Garden(props){
  console.log('this is props passed' + props.name);

  function handleModalClose(){
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_MODAL',
      modalIsOpen: false
    };
    dispatch(action);
    console.log(action);
  }
  return(
    <div>
      <img src={arrow} alt="arrow icon" className="arrow-svg" onClick={handleModalClose}/>
      <div className="plant-edit">
        <h1>{props.name}</h1>
          <RemoveButton/>
          <AddButton/>


      </div>
      <style jsx>{`
        .arrow-svg {
          width: 20px;
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
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
  };
};

export default connect(mapStateToProps)(Garden);
