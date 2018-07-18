import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import plantData from './../constants/InitialState';
import plantSVG from './../assets/imgs/pagelines.svg';


// if (state.selectedPlant != null){
//   let newSelectedPlant = <>
// }

function PlantList(props){

  return(
    <div>
      <h1>plant list</h1>
      <h2 className="plant-name">
        <img src={props.image} alt="image of plant" />
        <img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>name will go here {props.name}</h2>

    <Link to='/plant-detail'><button>Details</button></Link>
      <style jsx>
    </div>
  );
}


PlantList.propTypes = {
  plantData: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,

};
const mapStateToProps = {

};

export default connect()(PlantList);
