import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

/**
 * Render list item
 * @param {Object} props props required to render the list item
 */
const listItem = props => {
  return (
    <TouchableOpacity onPress={props.clicked}>
      <View style={styles.ListItem}>
        <Image 
          resizeMode="contain"
          style={styles.PlaceIcon} 
          source={props.placeIcon}/>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    flexDirection: 'row',
    backgroundColor: "#eee",
    width: "100%",
    marginBottom: 5,
  },
  PlaceIcon: {
    marginRight: 8,
    alignItems: "center",
    height: 30,
    width: 30,

  }
});

export default listItem;
