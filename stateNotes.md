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

const initialState = {
  plantData: plantData,
  selectedPlant: null,
  plantPosition: 0
}
