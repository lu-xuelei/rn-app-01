import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./listItem/listItem";

/**
 * Render a list of items
 * @param {Object} props props required to render the list item
 */
const listItems = props => {
  return (
    <FlatList
      style={styles.ListItems}
      data={props.places}
      renderItem={({item}) => (
        <ListItem
          placeName={item.name}
          placeIcon={item.icon}
          clicked={()=>props.onSelectPlace(item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  ListItems: {
    width: '100%',
  }
})
export default listItems;
