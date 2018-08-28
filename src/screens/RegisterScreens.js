import { Navigation } from 'react-native-navigation';

import AuthScreen from './auth/AuthScreen';

const SCREEN_PREFIX = 'rn.app.01.';

export const screens = {
   AUTH_SCREEN: SCREEN_PREFIX + 'AUTH_SCREEN',
}

// register all screens of the app (including internal ones)
export const registerScreens = () => {
  Navigation.registerComponent(screens.AUTH_SCREEN, () => AuthScreen);
}