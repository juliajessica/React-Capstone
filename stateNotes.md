Application State:

slices of state:
* state
* selectedPlant
* add/remove todo list items

Movement of State:
1. display all state in PlantSearch
2. display 'selected plant' in PlantDescription
3. add 'selected plant' to empty object in Garden and GardenEdit
4. remove 'selected plant' from GardenEdit if user selected remove.

1. task list []
2. remove items
3. add item to list

[object Object] {
  todos: [],
  visabilityFilter: "SHOW_ALL"
}

      ADDING AN ITEM:
[object Object] {
  todos: [[object Object]{
    completed: false,
    id: 0,
    text: ''
  }],
  visabilityFilter: "SHOW_ALL"

  TASKS:
  SHOW_ACTIVE
  SHOW_ALL
---------------------------------------------------

<!-- example to see the state structure
 13: {
    name: "Air Plant",
    image: airplant,
    description: "Air plants grow without dirt and come in all sizes and colors. Air plants attach themselves to rocks, trees, shrubs, or the ground with their roots and are native to the southern United States, Mexico, Central America, and South America.",
    maintenance: plantSVG,
    water: "1x a week",
    exposure: "Medium to a high light",
    growthPeriod: "Spring, Summer",
    bloom: "Mid Spring"
    id: 13
},  -->


// INITIAL REDUX STATE
const initialState = {
  plantData: plantData,  //songsById  - all of state
  selectedPlant: null,  //currentSongId - one plant by id
}

//if you're creating a separate reducer for new functionality then you will address the reducers at initialState.selectedPlant

//Redux Reducer (1) - complete
const plantSelectedReducer = (state = initialState, action) => {
  return state;
}

////selected plant reducer (2)
const plantSelectedReducer = (state = initialState.selectedPlant, action) => {
  switch (action.type) {
    case 'SELECT_PLANT':
    return action.newSelectedPlant;
  default:
  return state;
}


//click listener for 2nd reducer
const selectPlant = (plantData) => {
  let action = {
    type: 'SELECT_PLANT',
    newSelectedPlant: plantData
  }
  store.dispatch(action);
}
