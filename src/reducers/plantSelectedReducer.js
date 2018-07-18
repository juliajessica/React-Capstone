import constants from './../constants';
const { initialState, types } = constants;

const plantSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_PLANT:
    let newState = {
      plantData: initialState.plantData,
      selectedPlant: action.newSelectedPlantId,
    }
    console.log(newState);
    return newState;
  default:
    return state;
  }
};

export default plantSelectedReducer;
