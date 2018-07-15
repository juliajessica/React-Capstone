import c from './../constants';
const { initialState, types } = constants;

const plantSelectorReducer = (state = initialState.selectedPlant, action) => {
  switch (action.type) {
    case 'SELECT_PLANT':
    return action.newSelectedPlant;
  default:
  return state;
}
