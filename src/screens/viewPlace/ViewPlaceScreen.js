import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import DetailContainer from "../../containers/detailContainer/DetailContainer";
import { removePlace } from "../../store/actions/Actions";

class ViewPlaceScreen extends React.Component {
  /**
   * Handle the event of deleting place
   */
  onDeletePlace = placeKey => {
    // Delete the place from place list.
    this.props.onDelete(placeKey);

    console.log("ViewPlaceScreen.onDeletePlace...To pop the current screen");
    // Return back to previous page
    this.props.navigator.pop({
      animated: true, 
      animationType: "fade" 
    });
  };

  render() {
    return (
      <View>
        <DetailContainer
          selectedPlace={this.props.selectedPlace}
          deletePlace={this.onDeletePlace}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: placeKey => dispatch(removePlace(placeKey))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ViewPlaceScreen);
