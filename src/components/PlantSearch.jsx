import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import plantData from './../constants/InitialState';
import PlantList from './PlantList';

function PlantSearch(props) {
  //const {name, image} = allPlantData;
  //console.log(state.plantData);


//console.log(plant);

// if selectedPlant (referrring to props being mapped at bottom of file) is equal to the plantID from loop, render additional viewPlantDetails
//<detail component></detail>
// return <PlantDetail
//    name={plant.name}
//    image={plant.image}
//    description={plant.description}
//    maintenance={plant.maintenance}
//    water={plant.water}
//    exposure={plant.exposure}
//    growthPeriod={plant.growthPeriod}
//    bloom={plant.bloom}
//    key={plantId}
//    id={plantId}
//    />;

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
          </form>
      </div>


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

//console.log(plantData);


const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant
  };
};

export default connect(mapStateToProps)(PlantSearch);

//<PlantDescription />
