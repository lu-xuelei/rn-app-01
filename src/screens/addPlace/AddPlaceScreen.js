import React from "react";
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/Actions";

import PlaceController from "../../containers/placeController/PlaceController";
import { Primary } from "../../UI/styles/Colors";

class AddPlaceScreen extends React.Component {
  static navigatorStyle = {
    navBarButtonColor: Primary.color1
  };

  /**
   * To have navigation buttons, the component must setOnNavigatorEvent
   * and implement the event handler accordingly
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  /**
   * Handle the event when nevigation bar triggered
   */
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  render() {
    return <PlaceController addPlace={this.props.onAddPlace} />;
  }
}

/**
 * Map store state to props
 */
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddPlaceScreen);
