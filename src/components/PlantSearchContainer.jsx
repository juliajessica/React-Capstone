import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import plantData from './../constants/InitialState';
import SinglePlant from './SinglePlant';
//import { viewPlantDetails } from './../actions';


//need to change this into a classbased component
function PlantSearchContainer(props) {

  //const {name, image} = allPlantData;
  //console.log(state.plantData);


//console.log(plant);


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


//THIS IS WHAT I NEED TO DO!!!!
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
  // console.log(plant);
  return(
    <div>
      <div className="plant-Search">

        <h3>Plant Search</h3>
          <form>
            <input type="text" placeholder="SEARCH:" className="search-input"></input>
              <div className="singlePlant">
                {Object.keys(props.plantData).map(function(plantId){
                  let plant = props.plantData[plantId];

                   return <SinglePlant
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
                    plant={plant}
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

PlantSearchContainer.propTypes = {
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

//same as function mapStateToProps(state)
const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant
  };
};

export default connect(mapStateToProps)(PlantSearchContainer);

//<PlantDescription />
