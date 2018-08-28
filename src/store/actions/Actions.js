/**
 * Actions are payloads of information that send dat from application to store.
 *
 * They are the only source of information for the store. Information are sent
 * to store using store.dispatch()
 *
 * Actions.js consolidates actions defined for different modules and provides
 * a single exporting ponit
 */
export {
  addPlace,
  removePlace,
} from "./PlaceActions";
