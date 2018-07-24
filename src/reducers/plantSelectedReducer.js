import constants from './../constants';
const { initialState, types } = constants;

const plantSelectedReducer = (state = initialState, action) => {
  //console.log('this is the selected book reducer', action.selectedPlant);
  switch (action.type) {
    case 'SELECT_PLANT':
    let newState = Object.assign({}, state, {
      plantData: initialState.plantData,
      selectedPlant: action.selectedPlant,
    });
    console.log(newState);
    console.log(action);
    return newState;
  default:
    return state;
  }
};

export default plantSelectedReducer;
