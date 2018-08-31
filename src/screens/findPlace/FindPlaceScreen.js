import React from "react";
import { connect } from "react-redux";
import { View, Animated } from "react-native";

import ListContainer from "../../containers/listContainer/ListContainer";
import { VIEW_PLACE_SCREEN } from "../Screens";
import { Primary } from "../../UI/styles/Colors";
import ActButton from "../../UI/buttons/ActButton";
import { txtHeadings } from "../../UI/styles/TxtStyles";

class FindPlaceScreen extends React.Component {
  static navigatorStyle = {
    navBarButtonColor: Primary.color1
  };

  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1) // Initial value for opacity
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentWillUnmount = () => {
    console.log("FindPlaceScreen.componentWillUnmount...");
  };

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  /**
   * Handle event of place selection
   */
  onItemSelected = placeKey => {
    const place = this.props.places.find(place => place.key === placeKey);
    console.log("FindPlaceScreen.onItemSelected", place);

    /**
     * Lead to a new screen to view place details
     */
    this.props.navigator.push({
      screen: VIEW_PLACE_SCREEN,
      title: place.name,
      passProps: {
        selectedPlace: place
      }
    });
  };

  /**
   * Start find place with button animation
   */
  startFindPlace = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0, // Ends to opacity 0
      duration: 5000, // Animate for 500 msec
      useNativeDriver: true
    }).start();

  };

  render() {
    let content = (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1]
              })
            }
          ]
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActButton
            title="Find Place"
            vStyle={{ width: "60%", height: 80 }}
            tStyle={txtHeadings.Heading2}
            onPress={this.startFindPlace}
          />
        </View>
      </Animated.View>
    );

    if (this.state.placesLoaded) {
      content = (
        <ListContainer
          places={this.props.places}
          onSelectPlace={this.onItemSelected}
        />
      );
    }
    return content;
  }
}

const mapStateToProps = state => {
  return {
    places: state.place.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
