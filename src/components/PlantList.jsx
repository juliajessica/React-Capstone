import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import plantData from './../constants/InitialState';
import plantSVG from './../assets/imgs/pagelines.svg';
import { plantSelectedReducer } from './../actions'

// if (state.selectedPlant != null){
//   let newSelectedPlant = <>
// }

// //<img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{props.name}</h2>
//
//

function PlantList(props){
  let viewSinglePlant = null;
  let plant = plantData[props.id];
  console.log(plant);
//  if (props.plantData.selectedPlant)
//  if (song)
  return(
    <div>
      <div className="single-plant-flex" onClick={()=> {
          if(viewSinglePlant != null){
            dispatch()
          }
        }}>
        <div className="plant-list-img">
          <img src={props.image} alt="image of plant" className="image-resize" />
        </div>
        <h2 className="plant-name"><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>{props.name}</h2>
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
}


PlantList.propTypes = {
  plantData: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  maintenance: PropTypes.string,
  water: PropTypes.string,
  exposure: PropTypes.string,
  growthPeriod: PropTypes.string,
  bloom: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
};
// const mapStateToProps = {
//
// };

export default connect()(PlantList);
