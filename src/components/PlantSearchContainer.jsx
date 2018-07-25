import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SinglePlant from './SinglePlant';
import Garden from './Garden';

function PlantSearchContainer(props) {

  return(
    <div>
      <div className="plant-Search">
          <h3>Plant Search</h3>
            <form>

              <input type="text" placeholder="SEARCH:" className="search-input"></input>
                <div className="singlePlant">
                  {Object.keys(props.plantData).map(function(plantId){
                    let singlePlant = props.plantData[plantId];

                    //console.log(props.selectedPlant);
                    //console.log(singlePlant);
                    return (
                      <SinglePlant
                        name={singlePlant.name}
                        image={singlePlant.image}
                        description={singlePlant.description}
                        maintenance={singlePlant.maintenance}
                        water={singlePlant.water}
                        exposure={singlePlant.exposure}
                        growthPeriod={singlePlant.growthPeriod}
                        bloom={singlePlant.bloom}
                        id={plantId}
                        modalIsOpen={singlePlant.modalIsOpen} />
                     );
                    //console.log(props.description);
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
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
  };
};

export default connect(mapStateToProps)(PlantSearchContainer);
