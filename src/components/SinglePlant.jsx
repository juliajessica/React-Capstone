import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import plantSVG from './../assets/imgs/pagelines.svg';
// import c from './../constants';
//import { viewPlantDetails } from './../actions';

const SinglePlant = ({ dispatch, name, image, description, id }) => {
  //console.log(plant);
  //console.log('this is the selected plant' + selectedPlant);
  function handleClickedPlant(){
    const action = {
      type: 'SELECT_PLANT',
      selectedPlant: id
    };
    dispatch(action);

    //console.log(action);
  }
  //console.log(id);

  return(
    <div>

      <div
        className="single-plant-flex"
        key={id}
        onClick = {() => handleClickedPlant()} >

        <div className="plant-list-img">
          <img src={image} alt="image of plant" className="image-resize" />
        </div>

       <h2><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{name}</h2>
     </div>
      <style jsx>{`
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
  selectedPlant: PropTypes.object,
  image: PropTypes.string,
  id: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant
  };
};

// const mapStateToProps = state.selectedPlant => {
//   return {
//     plantData: state.plantData,
//     selectedPlant: state.selectedPlant
//   };
// };

export default connect(mapStateToProps)(SinglePlant);
