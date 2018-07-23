import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SinglePlant from './SinglePlant';
import SinglePlantDescription from './SinglePlantDescription';
//import { viewPlantDetails } from './../actions';
import c from './../constants';

//need to change this into a classbased component
function PlantSearchContainer(props) {
  // let viewSinglePlant = null;
  //
  // if (props.selectedPlant > 0){
  //   viewSinglePlant = <SinglePlantDescription selectedPlant={props.plantData[props.selectedPlant]} />;
  // }



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


// if (props.selectedPlant === props.plantData.id) {
//   //console.log(props.selectedPlant);
//   clickedPlant = <SinglePlant
//     selectedPlant = {props.plantData[props.selectedPlant]}
//     name={singlePlant.name}
//     image={singlePlant.image}
//     key={plantId}
//     id={plantId}
//     plant={singlePlant} />;
//   console.log(clickedPlant);
//   return (
//     <div>
//       <h1>this is the selected ticket</h1>
//       {clickedPlant}
//     </div>
//   );
// } else {
//   clickedPlant = <SinglePlantDescription
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
//     plant={plant} />;
//   return (
//     <div>
//       <h1>these are all the plants</h1>
//       {clickedPlant}
//     </div>
//   );
// }

// <div>{viewSinglePlant}</div>
  return(
    <div>
      <div className="plant-Search">
        <h3>Plant Search</h3>
          <form>

            <input type="text" placeholder="SEARCH:" className="search-input"></input>
              <div className="singlePlant">
                {Object.keys(props.plantData).map(function(plantId){
                  let singlePlant = props.plantData[plantId]; //single plant
                  //console.log(singlePlant);
                  return (
                    <SinglePlant
                      name={singlePlant.name}
                      image={singlePlant.image}
                      key={plantId}
                      id={plantId}
                      plant={singlePlant} />
                  );
                  console.log(singlePlant);
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
  selectedPlant: PropTypes.string,
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


const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    date: new Date(),
  };
};

export default connect(mapStateToProps)(PlantSearchContainer);
