import constants from './../constants';
const { initialState, types } = constants;

const plantDataReducer = (state = initialState.plantData, action) => {

  let newGardenItemStateSlice;
  switch (action.type) {
    case 'ADD_PLANT_TO_GARDEN':
    newGardenItemStateSlice = Object.assign({}, state[action.plantInGarden],{
      addedToGarden: false
    });
    console.log(newGardenItemStateSlice);
    return newGardenItemStateSlice;
  default:
    return state;
  }
};

export default plantDataReducer;
