import React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import DefTextInput from '../../UI/defTextInput/DefTextInput';
import DefButton from '../../UI/buttons/DefButton';

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
        <DefTextInput
          style={{width:"70%"}}
          value={this.state.placeName}
          placeholder="Enter Place Name"
          onChangeText={this.onChangePlaceName}
        />
        <DefButton
          vStyle={{width:"25%"}}
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
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5
  },
});

export default PlaceController;
