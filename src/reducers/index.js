
import plantSelectedReducer from './plantSelectedReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedPlant: plantSelectedReducer
});

export default rootReducer;
