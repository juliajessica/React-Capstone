import plantSelectedReducer from './plantSelectedReducer';
import displaySelectedPlantReducer from './displaySelectedPlantReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedPlant: plantSelectedReducer
  //modalIsOpen: displaySelectedPlantReducer
});

export default rootReducer;
