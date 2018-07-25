import React from 'react';
import Garden from './Garden';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import settings from './../assets/imgs/settings.svg';

function GardenList(props){
  console.log('gardenList' + props.name);

  return(
    <div>
      <div className="garden-item">
        <div className="plant-garden">
          <div className="plant-container">
            <img src={props.image} alt="image of plant in garden" className="plant-img"/>
          </div>
          <h1>{props.name}</h1>
          <Link to='/garden-edit'><img src={settings} alt="setting icon to edit garden"/></Link>
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
        .plant-garden {
          margin-top: 2rem;
          height: 90px;
          width: 100%;
          background-color: #EBAFA4;
          display: flex;
          align-items: center;
          justify-content: space-around;
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
  name: PropTypes.string,
  dispatch: PropTypes.func,
  selectedPlant: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
  };
};

export default connect(mapStateToProps)(GardenList);
