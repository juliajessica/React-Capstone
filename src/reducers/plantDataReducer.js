import constants from './../constants';
const { initialState, types } = constants;

const plantDataReducer = (state = initialState.plantData, action) => {

  let newGardenItemStateSlice;
  let newGardenItem;
  switch (action.type) {
    case 'ADD_PLANT_TO_GARDEN':
    newGardenItemStateSlice = Object.assign({}, state[action.id],{
      addedToGarden: true
    });
    console.log(action.id);
    console.log('Action: ', newGardenItemStateSlice);
    newGardenItem = Object.assign({}, state, {
      [action.id]: newGardenItemStateSlice
    });
    return newGardenItem;
  default:
    return state;
  }
};

export default plantDataReducer;
