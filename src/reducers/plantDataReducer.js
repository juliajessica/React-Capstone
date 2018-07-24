import constants from './../constants';
const { initialState, types } = constants;

const plantDataReducer = (state = initialState.plantData, action) => {
  //console.log('this is the selected book reducer', action.selectedPlant);

  switch (action.type) {
    case 'ADD_PLANT_TO_GARDEN':
    let newState = action.addedToGarden;
    console.log(newState);
    return newState;
  default:
    return state;
  }
};

export default plantDataReducer;
