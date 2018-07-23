import c from './../constants';
const { initialState, types } = c;

const plantSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_PLANT':
    let newState = Object.assign({}, state, {
      plantData: initialState.plantData,
      selectedPlant: action.selectedPlant,
    });
    //console.log(newState);
    //console.log(action);
    return newState;
  default:
    return state;
  }
};

export default plantSelectedReducer;
