import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import plantSVG from './../assets/imgs/pagelines.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlantData from './../constants/InitialState';
import PlantList from './PlantList';

// <div className="singlePlant" onCLick=''>
// {Object.keys(props.plantData).map(function(plantId){
//  let plant = props.plantData[plantId];
//    return <PlantDescription
//     name={plant.name}
//     image={plant.image}
//     description={plant.description}
//     maintenance={plant.maintenance}
//     water={plant.water}
//     exposure={plant.exposure}
//     growthPeriod={plant.growthPeriod}
//     bloom={plant.bloom}
//     key={plantId}
//     id={plantId}
//     />;
// })}


const PlantSearch = ({ dispatch, allPlantData }) => {
  //const {name, image} = allPlantData;
  //console.log(state.plantData);
  return(
    <div>
      <div className="plant-Search">

        <h3>Plant Search</h3>
        <form>
          <input type="text" placeholder="SEARCH:" className="search-input"></input>
            <div className="singlePlant">
              {Object.keys(props.plantData).map(function(plantId){
               let plant = props.plantData[plantId];
                 return <PlantList
                  name={plant.name}
                  image={plant.image}
                  description={plant.description}
                  maintenance={plant.maintenance}
                  water={plant.water}
                  exposure={plant.exposure}
                  growthPeriod={plant.growthPeriod}
                  bloom={plant.bloom}
                  key={plantId}
                  id={plantId}
                  />;
              })}
            </div>


            <h2 className="plant-name"><img src={plantSVG} className="leaf-icon" alt="Icon of a plant"/>will have plant name</h2>

          <Link to='/plant-detail'><button>Details</button></Link>
        </form>
      </div>
      <Nav/>
      <style jsx>{`
        .plant-Search{
          padding: 0 2rem;
          height: 565px;
        }
        .search-input {
          padding: .5rem;
          font-size: .8rem;
          border-radius: 5px;
          margin: .4rem 0;
          width: 20rem;
          border: 0px solid;
        }

        input[type=text] {
          color: white;
          background-color: #E18472;
        }
        .leaf-icon {
          height: 20px;
          padding: 0 1rem;
          width: auto;
        }
        .plant-name {
          text-transform: uppercase;
        }
      `}
      </style>
    </div>
  );
};

PlantSearch.propTypes = {
  plantData: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(PlantSearch);

//<PlantDescription />
