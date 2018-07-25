import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import arrow from '././../assets/imgs/arrow.svg';

function SinglePlantDescription(props){

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
        <img src={arrow} alt="arrow icon" className="arrow-svg" onClick={handleModalClose}/>
          <div className="flex-img-title">
            <div className="plant-desc-img">
              <img src={props.image} alt="image of plant" className="plant-desc-imgResize" />
            </div>
          </div>
          <button className="plant-name">{props.name}</button>
          <p><span className="plant-properties">Description:</span> {props.description}</p>
          <p><span className="plant-properties">Maintenance:</span> <img src={props.maintenance} alt="leaf icon" className="leaf-svg"/></p>
          <p><span className="plant-properties">Water:</span> {props.water}</p>
          <p><span className="plant-properties">Exposure:</span> {props.exposure}</p>
          <p><span className="plant-properties">Growth Period:</span> {props.growthPeriod}</p>
          <p><span className="plant-properties">Bloom:</span> {props.bloom}</p>

            <button
            onClick = {() => handleAddToGarden(props.id)} className="add-button">
            ADD TO GARDEN</button>

          </div>


      <style jsx>{`

        .flex-img-title {
          display: flex;
          justify-content: flex-end;
        }

        .arrow-svg {
          width: 20px;
          cursor: pointer;
        }

        .plant-name {
          border-radius: 5px;
          padding:.5rem 1.4rem;
          background-color: #E18472;
          font-size: 1.4rem;
          background: linear-gradient(#f7bfb4, #E18472);
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

        .add-button {
          color: white;
          font-size: 1rem;
          font-weight: lighter;
          width: 15rem;
          background-color:#0A07DF;
          border: 0px solid;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          opacity: .8;
          cursor: pointer;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          -webkit-animation-iteration-count: infinite;
        }

        .add-button:hover {
          cursor: pointer;
          animation-name: bounce;
          -moz-animation-name: bounce;
         }

        @keyframes bounce {
        	0%, 100%, 20%, 50%, 80% {
        		-webkit-transform: translateY(0);
        		-ms-transform: translateY(0);
        		transform: translateY(0)
        	}
        	40% {
        		-webkit-transform: translateY(-10px);
        		-ms-transform: translateY(-10px);
        		transform: translateY(-10px)
        	}
        	60% {
        		-webkit-transform: translateY(-5px);
        		-ms-transform: translateY(-5px);
        		transform: translateY(-5px)
        	}
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
  plantData: PropTypes.object,
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

export default connect(mapStateToProps)(SinglePlantDescription);
