import constants from './../constants';
const { initialState, types } = constants;

const plantDataReducer = (state = initialState.plantData, action) => {
  //console.log('this is the selected book reducer', action.selectedPlant);

  switch (action.type) {
    // case 'ADD_PLANT_TO_GARDEN':
    // let newStateSlice = Object.assign({}, state[action.addToGarden], {
    //   addToGarden: action.addToGarden,
    //   plantData: initialState.plantData,
    //   selectedPlant: action.selectedPlant,
    // });
    // console.log(newStateSlice);
    // return newStateSlice;
  default:
    return state;
  }
};

export default plantDataReducer;
