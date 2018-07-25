import constants from './../constants';
const { initialState } = constants;

const plantSelectedReducer = (state = initialState.selectedPlant, action) => {

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
