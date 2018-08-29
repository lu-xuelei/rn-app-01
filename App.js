import { Navigation } from 'react-native-navigation';

import * as screens from './src/screens/Screens';
import { registerScreens } from './src/screens/RegisterScreens';

// this is where you register all of your app's screens
registerScreens(); 

// Start the app
Navigation.startSingleScreenApp ({
  screen: {
    screen: screens.AUTH_SCREEN, // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen (optional)
    navigatorButtons: {} // override the nav buttons for the screen (optional)
  },  
})