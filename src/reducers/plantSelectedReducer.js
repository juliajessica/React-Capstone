import constants from './../constants';
const { initialState, types } = constants;

const plantSelectedReducer = (state = initialState, action) => {
  //console.log('this is the selected book reducer', action.selectedPlant);

  switch (action.type) {
    case 'SELECT_PLANT':
    let newState = Object.assign({}, state, {
      plantData: initialState.plantData,
      selectedPlant: action.selectedPlant,
      modalIsOpen: action.modalIsOpen,
    });
    console.log(newState);
    console.log(action);
    return newState;

    case 'ADD_PLANT_TO_GARDEN':
    let newStateSlice = Object.assign({}, state, {
      addToGarden: action.addToGraden,
      plantData: initialState.plantData,
      selectedPlant: action.selectedPlant,
    });
    console.log(newStateSlice);
    return newStateSlice;
  default:
    return state;
  }
};

export default plantSelectedReducer;
