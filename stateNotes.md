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

---------------------------------------------------

<!-- example to see the state structure
 13: {
    "name": "Air Plant",
    "image": airplant,
    "description": "Air plants grow without dirt and come in all sizes and colors. Air plants attach themselves to rocks, trees, shrubs, or the ground with their roots and are native to the southern United States, Mexico, Central America, and South America.",
    "maintenance": plantSVG,
    "water": "1x a week",
    "exposure": "Medium to a high light",
    "growthPeriod": "Spring, Summer",
    "bloom": "Mid Spring"
},  -->

import plantData from './plantData';


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
  } default:
  return state;
}
