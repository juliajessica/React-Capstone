import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import plantSVG from './../assets/imgs/pagelines.svg';
import SinglePlantDescription from './SinglePlantDescription';
// import c from './../constants';
//import { viewPlantDetails } from './../actions';

function SinglePlant(props){
// = ({ dispatch, name, image, description, id, selectedPlant }) => {
  //console.log(plant);
  //console.log('this is the selected plant' + selectedPlant);

  let viewSinglePlant = null;
  // console.log(selectedPlant);
  // //console.log(props.plantData.id);

  if (props.selectedPlant === props.id){
    viewSinglePlant = <SinglePlantDescription
      name={props.name}
      image={props.image}
      description={props.description}
      maintenance={props.maintenance}
      water={props.water}
      exposure={props.exposure}
      growthPeriod={props.growthPeriod}
      bloom={props.bloom}
      id={props.id}
    />;
  }

  //console.log('this is the plant ID' +  props.id);
  //console.log('this is the selected plant' + props.selectedPlant);

  function handleClickedPlant(id){
    const { dispatch } = props;
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
  name: PropTypes.string,
  description: PropTypes.string,
  maintenance: PropTypes.string,
  water: PropTypes.string,
  exposure: PropTypes.string,
  growthPeriod: PropTypes.string,
  bloom: PropTypes.string,
  id: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant
  };
};

export default connect(mapStateToProps)(SinglePlant);
