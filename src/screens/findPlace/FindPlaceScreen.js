import React from "react";
import { connect } from "react-redux";

import ListContainer from "../../containers/listContainer/ListContainer";
import { VIEW_PLACE_SCREEN } from "../Screens";
import { Primary } from "../../UI/styles/Colors";

class FindPlaceScreen extends React.Component {
  static navigatorStyle = {
    navBarButtonColor: Primary.color1
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

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

  render() {
    return (
      <ListContainer
        places={this.props.places}
        onSelectPlace={this.onItemSelected}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.place.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
