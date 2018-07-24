import plantSelectedReducer from './plantSelectedReducer';
import plantDataReducer from './plantDataReducer';
import moduleOpenReducer from './moduleOpenReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedPlant: plantSelectedReducer,
  plantData: plantDataReducer,
  modalIsOpen: moduleOpenReducer
});

export default rootReducer;
