import { combineReducers } from 'redux';
import plantSelectedReducer from './plantSelectedReducer';

const rootReducer = combineReducers({
  selectedPlant: plantSelectedReducer
});

export default rootReducer;
