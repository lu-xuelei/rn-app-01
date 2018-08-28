import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { screens } from "../RegisterScreens";

/**
 * To start the main tabs
 */
const startMainTabs = () => {
  // Load icons for the tabs
  Promise.all([
    // 0. Icon for Add Place
    Icon.getImageSource("md-add-circle-outline", 30),
    // 1. Icon for Find Place
    Icon.getImageSource("ios-search", 30),
  ]).then(sources => {
    startTabBasedApps(sources);
  }).catch(err => {
    console.log(err);
  });
};

/**
 * Start tab based apps with icons
 * @param {Array} icons list of icons loaded before the callback
 */
const startTabBasedApps = icons => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "Add",
        screen: screens.ADD_PLACE_SCREEN,
        icon: icons[0],
        title: "Add Place",
      },
      {
        label: "Find",
        screen: screens.FIND_PLACE_SCREEN,
        icon: icons[1],
        title: "Find Place"
      }
    ]
  });
};

export default startMainTabs;
