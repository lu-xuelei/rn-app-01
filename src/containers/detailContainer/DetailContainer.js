import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import PlaceDetail from "../../components/placeDetail/PlaceDetail";
import {iconPrefix} from '../../UI/platform/PlatformInfo'

class DetailContainer extends React.Component {
  render() {
    return (
      <View style={styles.DetailContainer}>
        <PlaceDetail
          placeName={this.props.selectedPlace.name}
          placeImage={this.props.selectedPlace.image}
        />
        <View style={styles.PlaceDetailBtn}>
          <TouchableOpacity onPress={()=>this.props.deletePlace(this.props.selectedPlace.key)}>
            <Icon color="#F00" size={30} name={iconPrefix+"trash"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DetailContainer: {
    marginTop: 2
  },
  PlaceDetailBtn: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  }
});

export default DetailContainer;
