import constants from './../constants';
const { initialState, types } = constants;

const plantDataReducer = (state = initialState.plantData, action) => {

  let newState;
  let newGardenItemStateSlice;

  switch (action.type) {
    case 'ADD_PLANT_TO_GARDEN':
    newState = Object.assign({}, state[action.id],{
      addedToGarden: true
    });
    //console.log(action.id);
    //console.log('Action: ', newState);
    newGardenItemStateSlice = Object.assign({}, state, {
      [action.id]: newState
    });
    return newGardenItemStateSlice;


    case 'REMOVE_PLANT_FROM_GARDEN':
    newState = Object.assign({}, state[action.id],{
      addedToGarden: false
    });
    newGardenItemStateSlice = Object.assign({}, state, {
      [action.id]: newState
    });
    return newGardenItemStateSlice
  default:
    return state;
  }
};

export default plantDataReducer;
