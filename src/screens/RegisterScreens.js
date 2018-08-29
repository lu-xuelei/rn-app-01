import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import configureStore from "../store/ConfigureStore";

import AuthScreen from "./auth/AuthScreen";
import AddPlaceScreen from "./addPlace/AddPlaceScreen";
import FindPlaceScreen from "./findPlace/FindPlaceScreen";
import ViewPlaceScreen from './viewPlace/ViewPlaceScreen';
import SideDrawerScreen from './sideDrawer/SideDrawerScreen';

import * as screens from './Screens';

/**
 * Configure redux store
 */
const store = configureStore();

/**
 * Register all screens of the app (including internal ones)
 * Passing Redux store and Provider as parameters to connect the screens to Redux
 */
export const registerScreens = () => {
  Navigation.registerComponent(
    screens.AUTH_SCREEN,
    () => AuthScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    screens.ADD_PLACE_SCREEN,
    () => AddPlaceScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    screens.FIND_PLACE_SCREEN,
    () => FindPlaceScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    screens.VIEW_PLACE_SCREEN,
    () => ViewPlaceScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    screens.SIDE_DRAWER_SCREEN,
    () => SideDrawerScreen,
    store,
    Provider
  );
};
