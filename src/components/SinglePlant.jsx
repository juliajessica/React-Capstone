 import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import plantSVG from './../assets/imgs/pagelines.svg';
import SinglePlantDescription from './SinglePlantDescription';
import Modal from 'react-modal';
import c from './../constants';


function SinglePlant(props){

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  let viewSinglePlant = null;
  // console.log(selectedPlant);
  // console.log(props.plantData.id);

  if (props.selectedPlant === props.id){
    viewSinglePlant =
    <Modal
      style={customStyles}
      isOpen={props.modalIsOpen}>
        <SinglePlantDescription
        name={props.name}
        image={props.image}
        description={props.description}
        maintenance={props.maintenance}
        water={props.water}
        exposure={props.exposure}
        growthPeriod={props.growthPeriod}
        bloom={props.bloom}
        id={props.id}
      />
      </Modal>;
  }

  //console.log('this is the plant ID' +  props.id);
  //console.log('this is the selected plant' + props.selectedPlant);

  function handleClickedPlant(id){
    const { dispatch } = props;
    const action1 = {
      type: "SELECT_PLANT",
      id,
    };
    dispatch(action1);
    const action2 = {
      type: "TOGGLE_MODAL",
    };
    dispatch(action2);
    //console.log(action);
  }
  //console.log(id);

  return(
    <div className="full-plant-detail">
      <div>{viewSinglePlant}</div>
      <div
        className="single-plant-flex"
        onClick = {() => handleClickedPlant(props.id)} >

        <div className="plant-list-img">
          <img src={props.image} alt="image of plant" className="image-resize" />
        </div>

       <h2><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{props.name}</h2>
     </div>
      <style jsx>{`
        .full-plant-detail {
          cursor: pointer;
        }
        .full-plant-detail:hover {
          box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        }
        .plant-list-img {
          display: block;
          overflow: hidden;
          height: 100px;
          width: 100px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .image-resize {
          width: 120px;
        }
        .single-plant-flex {
          display:flex;
          flex-direction: row;
          flex-wrap: nowrap;
          padding: 1rem 0;
        }
          `}
      </style>
  </div>
  );
};


SinglePlant.propTypes = {
  plantData: PropTypes.object,
  dispatch: PropTypes.func,
  selectedPlant: PropTypes.string,
  modalIsOpen: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    modalIsOpen: state.modalIsOpen
  };
};

export default connect(mapStateToProps)(SinglePlant);
