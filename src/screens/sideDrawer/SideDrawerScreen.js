import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends React.Component {
  render() {
    return (
      <View style={[styles.SideDrawer, { width: Dimensions.get("window").width * 0.8 }]}>
        <Text>SideDrawer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SideDrawer: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'white',
  }
});

export default SideDrawer;
