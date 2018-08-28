import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const placeDetail = props => {
  return (
    <View>
      <Image style={styles.PlaceDetailImage} source={props.placeImage} />
      <Text style={styles.PlaceDetailName}>{props.placeName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeDetailView: {
    width:'100%',
  },
  PlaceDetailImage: {
    width: '100%',
    height: 300,
  },
  PlaceDetailName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 26,
  },
});

export default placeDetail;
