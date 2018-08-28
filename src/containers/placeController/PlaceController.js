import React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

class PlaceController extends React.Component {
  state = {
    placeName: ""
  };

  /**
   * Event handler to process changes to input - placeName
   * @param {string} inputName new value of the placeName
   */
  onChangePlaceName = inputName => {
    this.setState({
      ...this.state,
      placeName: inputName
    });
  };

  /**
   * Add the new place to place list by dispatching addPlace function
   */
  onAddPlace = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.addPlace(this.state.placeName);

      // reset placeName afte adding to place list
      this.setState({
        ...this.state,
        placeName: ""
      });
    }
  };

  render() {
    return (
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.PlaceInput}
          value={this.state.placeName}
          placeholder="Enter Place Name"
          onChangeText={this.onChangePlaceName}
        />
        <Button
          style={styles.PlaceButton}
          title="Add"
          onPress={this.onAddPlace}
          accessibilityLabel="Add a Place"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  PlaceInput: {
    width: "70%",
    borderColor: "blue"
  },
  PlaceButton: {
    width: "30%",
    borderColor: "blue"
  }
});

export default PlaceController;
