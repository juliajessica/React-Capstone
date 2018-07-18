import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import plantData from './../constants/InitialState';
import plantSVG from './../assets/imgs/pagelines.svg';
import { viewPlantDetails } from './../actions'

// if (state.selectedPlant != null){
//   let newSelectedPlant = <>
// }

const PlantList = ({ dispatch, name, image, description }) => {
  console.log(name);

    // const { image, name, id } = plantData;
    const viewSinglePlant = null;
  // const selectedPlant = plantData[id];
  // console.log(selectedPlant);
//  if (props.plantData.selectedPlant)
//  if (song)
//
//     if (viewSinglePlant != null){
//       dispatch(viewPlantDetails(id));
//     }<h2 className="plant-name"><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{name}</h2>
//   }}>
  // {selectedPlant}
    // <img src={image} alt="image of plant" className="image-resize" />
    //   <h2 className="plant-name"><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{name}</h2>
  return(
    <div>
     <div className="single-plant-flex"></div>
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


PlantList.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
};

// const mapStateToProps = state.selectedPlant => {
//   return {
//     plantData: state.plantData,
//     selectedPlant: state.selectedPlant
//   };
// };

export default connect()(PlantList);
