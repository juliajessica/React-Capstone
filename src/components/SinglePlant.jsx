import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import plantSVG from './../assets/imgs/pagelines.svg';

import { viewPlantDetails } from './../actions';
import { bindActionCreators } from 'redux';

// if (state.selectedPlant != null){
//   let newSelectedPlant = <>
// }

const SinglePlant = ({ dispatch, name, image, description, id, plant}) => {
  console.log(plant);
  //const viewSinglePlant = null;
  return(
    <div>
     <div
       className="single-plant-flex"
       key={id}
       onClick={() => this.props.viewPlantDetails(plant)}
       >
      <div className="plant-list-img">
        <img src={image} alt="image of plant" className="image-resize" />
      </div>
      <h2><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{name}</h2>
      {this.renderSinglePlant}
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
  dispatch: PropTypes.func,
  image: PropTypes.string,
  id: PropTypes.string,
  plant: PropTypes.object
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ viewPlantDetails: viewPlantDetails }, dispatch)
}


// const mapStateToProps = state.selectedPlant => {
//   return {
//     plantData: state.plantData,
//     selectedPlant: state.selectedPlant
//   };
// };

export default connect(mapDispatchToProps)(SinglePlant);
