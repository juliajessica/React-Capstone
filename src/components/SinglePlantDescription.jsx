import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SinglePlantDescription(props){
  let showNewPlantInGarden = null;

  function handleModalClose(){
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_MODAL',
      modalIsOpen: false
    };
    dispatch(action);
    console.log(action);
  }

  function handleAddToGarden(id){
    const { dispatch } = props;
    const action = {
      type: 'ADD_PLANT_TO_GARDEN',
      id,

    };
    dispatch(action);
    console.log(action);
  }

  return(
    <div>
      <div className="single-plant-description">

        <h1 className="plant-name">{props.name}</h1>
            <div className="plant-desc-img">
              <img src={props.image} alt="image of plant" className="plant-desc-imgResize" />
            </div>
          <p><span className="plant-properties">Description:</span> {props.description}</p>
          <p><span className="plant-properties">Maintenance:</span> <img src={props.maintenance} alt="leaf icon" className="leaf-svg"/></p>
          <p><span className="plant-properties">Water:</span> {props.water}</p>
          <p><span className="plant-properties">Exposure:</span> {props.exposure}</p>
          <p><span className="plant-properties">Growth Period:</span> {props.growthPeriod}</p>
          <p><span className="plant-properties">Bloom:</span> {props.bloom}</p>
          <Link to='/garden'><button
            onClick = {() => handleAddToGarden(props.id)} >
            ADD TO GARDEN</button></Link>
            <button
              onClick={handleModalClose}>
              close me
            </button>
          </div>


      <style jsx>{`
        .flex-plant {
          display: flex;
          justify-content: space-between;
        }

        .plant-name {
          border-radius: 5;
        }

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

        .plant-properties {
          font-weight: bold;
          color: #d69ea5;
        }

        .leaf-svg{
          padding: .2rem;
          width: 15px;
        }

        `}
      </style>
    </div>
  );
}


SinglePlantDescription.propTypes = {
  dispatch: PropTypes.func,
  selectedPlant: PropTypes.string,
  modalIsOpen: PropTypes.bool,
  addToGarden: PropTypes.bool,
  //name: PropTypes.string,
};


const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    modalIsOpen: state.modalIsOpen,
    addToGarden: state.addToGarden
  };
};

export default connect(mapStateToProps)(SinglePlantDescription);
