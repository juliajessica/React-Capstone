import * as types from './../constants/ActionTypes';
//import v4 from 'uuid/v4';

export const viewPlantDetails = (newSelectedPlantId) => ({
  type: types.SELECT_PLANT,
  newSelectedPlantId
});
