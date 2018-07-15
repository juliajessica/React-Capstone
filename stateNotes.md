Application State:

slices of state:
* state
* selectedState
* newState

Movement of State:
1. display all state in PlantSearch
2. display 'selected plant' in PlantDescription
3. add 'selected plant' to empty object in Garden and GardenEdit
4. remove 'selected plant' from GardenEdit if user selected remove.


// INITIAL REDUX STATE
const initialState = {
  plantData: plantData,
  selectedPlant: null,
  plantPosition: 0,
}

//Redux Reducer (1) - complete
const reducer = (state = initialState, action) => {
  return state;
}

//add action to initial Reducer (2)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLANT_POSTION':

    }
  }
  return state;
}


////2nd reducer (3)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_TICKET':
    let newSelectedPlant = state.selectedPlant;
    if (newSelectedPlant !=null) {
      newSelectedPlant ///stopped here
    } return newState;
  } default
  return state;
}
