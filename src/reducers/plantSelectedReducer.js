import constants from './../constants';
const { initialState, types } = constants;

const plantSelectedReducer = (state = initialState.selectedPlant, action) => {
  //console.log('this is the selected book reducer', action.selectedPlant);

  switch (action.type) {
    case 'SELECT_PLANT':
    let newState = action.id;
    console.log(newState);
    return newState;

  default:
    return state;
  }
};

export default plantSelectedReducer;
