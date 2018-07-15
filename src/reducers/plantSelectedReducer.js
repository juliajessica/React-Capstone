import constants from './../constants';
const { initialState, types } = constants;

const plantSelectedReducer = (state = initialState.selectedPlant, action) => {
  switch (action.type) {
    case types.SELECT_PLANT:
    return action.newSelectedPlant;
  default:
    return state;
  }
};

export default plantSelectedReducer;
