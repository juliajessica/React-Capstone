import React from 'react';
import Garden from './Garden';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import settings from './../assets/imgs/settings.svg';
import Modal from 'react-modal';

function GardenList(props){
  console.log('gardenList' + props.id);

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

  let editSinglePlant = null;

  if (props.selectedPlant === props.id){
    editSinglePlant =
    <Modal
      style={customStyles}
      isOpen={props.modalIsOpen}>
        <Garden
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


  function handleEditGardenItem(id){
    const { dispatch } = props;
    const action = {
      type: "TOGGLE_MODAL",
      id,
    };
    dispatch(action);
    console.log('this is handleEditGardenItem' + action);
  }
  //console.log(id);

  return(
    <div>
      <div className="garden-item">
        <div>{editSinglePlant}</div>
        <div className="plant-garden">
          <div className="plant-container">
            <img src={props.image} alt="image of plant in garden" className="plant-img"/>
          </div>
          <h1>{props.name}</h1>

            <img src={settings} className="settings-svg" alt="setting icon to edit garden" onClick = {() => handleEditGardenItem(props.id)}/>

        </div>


      </div>
      <style jsx>{`
        .garden-item {
          margin-top: 0rem;
          margin: auto;

        }
        .plant-garden img{
          padding-right: 1rem;
        }
        .settings-svg {
          cursor: pointer;
        }
        .plant-garden {
          margin-top: 2rem;
          height: 90px;
          width: 100%;
          background-color: #EBAFA4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: .4rem .6rem;
        }
        .plant-container {
          display: block;
          overflow: hidden;
          height: 80px;
          width: 80px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .plant-img{
          width: 80px;
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
  modalIsOpen: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    modalIsOpen: state.modalIsOpen,
  };
};

export default connect(mapStateToProps)(GardenList);
