import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import settings from './../assets/imgs/settings.svg';
import GardenName from './GardenName';
import GardenList from './GardenList';
//import RemoveButton from './RemoveButton';
import AddButton from './AddButton';
import arrow from '././../assets/imgs/arrow.svg';


function Garden(props){

  function handleModalClose(){
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_MODAL',
      modalIsOpen: false
    };
    dispatch(action);
    console.log(action);
  }

  function handlePlantRemove(id){
    const { dispatch } = props;
    const action = {
      type: 'REMOVE_PLANT_FROM_GARDEN',
      id,
      addedToGarden: false
    };
    dispatch(action);
    console.log(action);
  }

  // if(addedtoGarden === false)
  //
  // function refreshPage(){
  //   window.location.reload();
  // }

  return(
    <div>
      <img src={arrow} alt="arrow icon" className="arrow-svg" onClick={handleModalClose}/>
      <div className="plant-edit">
        <h1>{props.name}</h1>
          <button type="button" onClick= {() => handlePlantRemove(props.id)} className="edit-cal">REMOVE</button>
          <AddButton/>

      </div>
      <style jsx>{`
        .arrow-svg {
          width: 20px;
        }
        .edit-cal {
          font-size: .8rem;
          color: white;
          width: 10rem;
          background-color:#0A07DF;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          border: 0px solid;
          opacity: .8;
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
