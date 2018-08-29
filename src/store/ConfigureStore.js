/**
 * Configure store for the application
 *
 * - Create store with reducers
 */
import { createStore, compose } from "redux";

import reducers from "./reducers/Reducers";

let composeEnhancers = compose;

/**
 * For development, try to turn on Redux DevTools if available
 */
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

/**
 * Configure store with reducers and middleware 
 */
const configureStore = () => {
  return createStore(reducers, composeEnhancers());
};

export default configureStore;
