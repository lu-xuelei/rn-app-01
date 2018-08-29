/**
 * Reducer specify how the application's state changes in response to actions
 * sent to the store. (Actions only describe what happend, but don't describe
 * ohw the application's state changes)
 */
import * as AT from "../actions/ActionTypes";

// Define initial state of the reducer
const initState = {
  places: [],
  selectedPlace: null
};

/**
 * Reducer changes application state based on actions received
 *
 * @param {Object} state - previous state of the reducer
 * @param {Object} action - action dispatched
 * @returns {Ojbect} next state
 */
const reducer = (state = initState, action) => {
  switch (action.type) {
    case AT.ADD_PLACE:
      return addPlace(state, action);
    case AT.REMOVE_PLACE:
      return removePlace(state, action);
    default:
      return state;
  }
};

/**
 * Add a new place the places list
 * @param {Object} state - previous state of the reducer
 * @param {Object} action - action received
 * @returns {Object} new state
 */
const addPlace = (state, action) => {
  console.log("addPlace...");
  return {
    ...state,
    places: state.places.concat({
      key: Math.random().toString(),
      name: action.placeName,
      icon: action.placeIcon,
      image: action.placeImage
    })
  };
};

/**
 * Remove the selected place from the places list
 * @param {Object} state - previous state of the reducer
 * @param {Object} action - action received
 * @returns {Object} new state
 */

const removePlace = (state, action) => {
  console.log("removePlace...");
  return {
    ...state,
    places: state.places.filter(place => place.key !== action.placeKey),
    selectedPlace: null
  };
};

export default reducer;
