import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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



  function handlePlantRemove(){
    const { dispatch } = props;
    const action = {
      type: 'REMOVE_PLANT_FROM_GARDEN',
      id: props.id
    };
    console.log('this is the selected plant' + props.id);
    dispatch(action);
    console.log(action);
  }

  return(
    <div>
      <img src={arrow} alt="arrow icon" className="arrow-svg" onClick={handleModalClose}/>
      <div className="plant-edit">
        <div className="flex-edit-plant">
          <h1>{props.name}</h1>
          <div className="plant-desc-img">
            <img src={props.image} className="resize-edit-plant" alt="plant image in garden"/>
          </div>
        </div>
          <button type="button" onClick= {() => handlePlantRemove(props.id)} className="edit-button">REMOVE</button>

      </div>
      <style jsx>{`
        .arrow-svg {
          width: 20px;
          cursor: pointer;
        }
        .edit-button {
          font-size: .8rem;
          color: white;
          width: 10rem;
          background-color:#0A07DF;
          border-radius: 5px;
          padding: .5rem 0;
          margin: auto;
          border: 0px solid;
          opacity: .8;

        }

        .flex-edit-plant {
          display: flex:
          flex-direction: column;
          justify-content: center;
          margin: 2rem;
        }

        .edit-button:hover {
          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        @keyframes shake {
          10%, 90% {
            transform: translate3d(-1px, 0, 0);
          }

          20%, 80% {
            transform: translate3d(2px, 0, 0);
          }

          30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
          }

          40%, 60% {
            transform: translate3d(4px, 0, 0);
          }
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
