import constants from './../constants';
const { initialState } = constants;

const plantDataReducer = (state = initialState.plantData, action) => {

  let newState;
  let addGardenItemStateSlice;
  let removeGardenItemStateSlice;

  switch (action.type) {
    case 'ADD_PLANT_TO_GARDEN':
    newState = Object.assign({}, state[action.id],{
      addedToGarden: true,

    });
    //console.log(action.id);
    //console.log('Action: ', newState);
    addGardenItemStateSlice = Object.assign({}, state, {
      [action.id]: newState
    });
    return addGardenItemStateSlice;


    case 'REMOVE_PLANT_FROM_GARDEN':
    newState = Object.assign({}, state[action.id],{
      addedToGarden: false
    });
    removeGardenItemStateSlice = Object.assign({}, state, {
      [action.id]: newState
    });
    return removeGardenItemStateSlice;
  default:
    return state;
  }
};

export default plantDataReducer;
