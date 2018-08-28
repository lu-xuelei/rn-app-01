/**
 * Combine multiple reducers into one
 */
import {combineReducers} from 'redux';

import placeReducer from './PlaceReducer';

/**
 * Combine reducers with combineReducers function
 */
const reducers = combineReducers({
  place: placeReducer,
});

export default reducers;