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

// //<img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{props.name}</h2>
//
//


function PlantList(props){

  return(
    <div>
      <h1>plant list</h1>
      <h2 className="plant-name">
        <div className="plant-list-img">
            <img src={props.image} alt="image of plant" className="image-resize"/>
        </div>

        <img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{props.name}</h2>

    <Link to='/plant-detail'><button>Details</button></Link>
      <style jsx>{`
        .plant-list-img {
          display: block;
          overflow: hidden;
          height: 100px;
          width: 100px;
        }
        .image-resize {
          width: 100px;
        }
          `}
      </style>
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
