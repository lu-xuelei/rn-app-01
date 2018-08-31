import React from "react";
import { View, StyleSheet , Text} from "react-native";

import ListItems from "../../components/listItems/ListItems";
import { txtHeadings } from "../../UI/styles/TxtStyles";

class ListContainer extends React.Component {
  render() {
    let content = <Text style={txtHeadings.Heading2}>No Places Available</Text>;
    if (this.props.places.length > 0) {
      content = (
        <ListItems
          places={this.props.places}
          onSelectPlace={this.props.onSelectPlace}
        />
      );
    }
    return <View style={styles.ListContainer}>{content}</View>;
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
