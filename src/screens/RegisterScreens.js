import { Navigation } from 'react-native-navigation';

import AuthScreen from './auth/AuthScreen';
import AddPlaceScreen from './addPlace/AddPlaceScreen';
import FindPlaceScreen from './findPlace/FindPlaceScreen';

// Prefix for screen IDs
const SCREEN_PREFIX = 'rn.app.01.';

export const screens = {
   AUTH_SCREEN: SCREEN_PREFIX + 'AUTH_SCREEN',
   FIND_PLACE_SCREEN: SCREEN_PREFIX + 'FIND_PLACE_SCREEN',
   ADD_PLACE_SCREEN: SCREEN_PREFIX + 'ADD_PLACE_SCREEN',
}

// register all screens of the app (including internal ones)
export const registerScreens = () => {
  Navigation.registerComponent(screens.AUTH_SCREEN, () => AuthScreen);
  Navigation.registerComponent(screens.ADD_PLACE_SCREEN, () => AddPlaceScreen);
  Navigation.registerComponent(screens.FIND_PLACE_SCREEN, () => FindPlaceScreen);
}