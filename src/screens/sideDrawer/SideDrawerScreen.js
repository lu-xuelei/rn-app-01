import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { iconPrefix } from "../../UI/platform/PlatformInfo";
import { Primary, Neutrals } from "../../UI/styles/Colors";
import {txtHeadings} from '../../UI/styles/TxtStyles';

class SideDrawer extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.SideDrawer,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity style={styles.ItemContainer}>
          <Icon
            name={iconPrefix + "log-out"}
            size={25}
            color={Primary.color1}
          />
          <Text style={txtHeadings.Heading3}>  Log-out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SideDrawer: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "white"
  },
  ItemContainer: {
    margin: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Neutrals.color7,
    borderRadius: 10
  }
});

export default SideDrawer;
