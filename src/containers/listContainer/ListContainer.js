import React from "react";
import { View, StyleSheet } from "react-native";

import ListItems from "../../components/listItems/ListItems";

class ListContainer extends React.Component {
  render() {
    return (
      <View style={styles.ListContainer}>
        <ListItems
          places={this.props.places}
          onSelectPlace={this.props.onSelectPlace}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ListContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }
});

export default ListContainer;
