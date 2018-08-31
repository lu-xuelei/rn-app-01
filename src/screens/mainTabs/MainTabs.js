import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import * as screens from "../Screens";
import { Primary, Secondary } from "../../UI/styles/Colors";
import { iconPrefix } from "../../UI/platform/PlatformInfo";

/**
 * To start the main tabs
 */
const startMainTabs = () => {
  // Load icons for the tabs
  Promise.all([
    // 0. Icon for Add Place
    Icon.getImageSource(iconPrefix + "add-circle", 30),
    // 1. Icon for Find Place
    Icon.getImageSource(iconPrefix + "search", 30),
    // 2. Icon for menu item
    Icon.getImageSource(iconPrefix + "menu", 30)
  ])
    .then(sources => {
      startTabBasedApps(sources);
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * Start tab based apps with icons
 * @param {Array} icons list of icons loaded before the callback
 */
const startTabBasedApps = icons => {
  // define the navigation buttons for tabs
  const navBtns = {
    leftButtons: [
      {
        icon: icons[2],
        title: "Menu",
        id: "sideDrawerToggle"
      }
    ]
  };

  return Navigation.startTabBasedApp({
    tabs: [
      {
        label: "Add",
        screen: screens.ADD_PLACE_SCREEN,
        icon: icons[0],
        title: "Add Place",
        navigatorButtons: {
          ...navBtns
        }
      },
      {
        label: "Find",
        screen: screens.FIND_PLACE_SCREEN,
        icon: icons[1],
        title: "Find Place",
        navigatorButtons: {
          ...navBtns
        }
      }
    ],
    tabsStyle: {
      ...tabsTyle
    },
    appStyle: {
      ...appStyle
    },
    drawer: {
      left: {
        screen: screens.SIDE_DRAWER_SCREEN,
        fixedWidth: "30%"
      }
    }
  });
};

/**
 * Common navigator style
 */
const commonNavStyle = {};

/**
 * Tab style
 */
const tabsTyle = {
  tabBarButtonColor: Primary.color2, // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
  tabBarSelectedButtonColor: Primary.color1, // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
  tabBarBackgroundColor: Primary.color4 // optional, change the background color of the tab bar
  //initialTabIndex: 1 // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
};

/**
 * App style
 */
const appStyle = {
  tabBarButtonColor: Primary.color2, // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
  tabBarSelectedButtonColor: Primary.color1, // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
  tabBarBackgroundColor: Primary.color4, // optional, change the background color of the tab bar
  orientation: "auto", // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  bottomTabBadgeTextColor: "red", // Optional, change badge text color. Android only
  bottomTabBadgeBackgroundColor: "green", // Optional, change badge background color. Android only
  //backButtonImage: require("./pathToImage.png"), // Change the back button default arrow image with provided image. iOS only
  hideBackButtonTitle: false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
};

export default startMainTabs;
