import constants from './../constants';
const { initialState, types } = constants;

const moduleOpenReducer = (state = initialState.modalIsOpen, action) => {
  //console.log('this is the selected book reducer', action.selectedPlant);

  switch (action.type) {
    case 'MODAL_OPEN':
    // case 'TOGGLE_MODAL':
      const newState = !state;
      console.log(newState);
      return newState;
  default:
    return state;
  }
};

export default moduleOpenReducer;
