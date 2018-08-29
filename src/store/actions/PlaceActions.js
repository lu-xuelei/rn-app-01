/**
 * Actions are payloads of information that send dat from application to store.
 * 
 * They are the only source of information for the store. Information are sent
 * to store using store.dispatch()
 * 
 * type is a mandatory attribute of the action object.
 */

import * as AT from "./ActionTypes";

// import image 
import iconImage from '../../assets/images/location512.png';

/**
 * Create ADD_PLACE action for dispatching
 *
 * @param {string} placeName: name of the place to be added
 * @returns {Object} action object with {type, placeName}
 */
export const addPlace = placeName => {
  console.log('[PlaceActions] addPlace...');
  return {
    type: AT.ADD_PLACE,
    placeName: placeName,
    placeIcon: iconImage,
    placeImage: {
      uri: 'https://qph.fs.quoracdn.net/main-qimg-66c82781bbb1e6ad11f0702e97575ea0-c',
    },
  };
};

/**
 * Remove selectedPlace from places
 * 
 * @returns {object} action object with {type}
 */
export const removePlace = (placeKey) => {
  console.log('[PlaceActions] removePlace...');
  return {
    type: AT.REMOVE_PLACE,
    placeKey: placeKey
  };
};


