import constants from './../constants';
const { initialState, types } = constants;

const moduleOpenReducer = (state = initialState.modalIsOpen, action) => {

  switch (action.type) {
    case 'TOGGLE_MODAL':
      const newState = !state;
      //console.log(newState);
      return newState;
  default:
    return state;
  }
};

export default moduleOpenReducer;
