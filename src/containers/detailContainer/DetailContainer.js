import React from "react";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import PlaceDetail from "../../components/placeDetail/PlaceDetail";
import * as actions from "../../store/actions/Actions";

class DetailContainer extends React.Component {
  render() {
    let placeDetail = null;

    // Render place detail only if a place is selected
    if (this.props.place !== null) {
      placeDetail = (
        <PlaceDetail
          placeName={this.props.place.name}
          placeImage={this.props.place.image}
        />
      );
    }

    // alert (this.props.place !== null);
    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.place !== null}
        animationType="slide"
      >
        {placeDetail}
        <View style={styles.PlaceDetailBtn}>
          <TouchableOpacity onPress={this.props.onDelete}>
            <Icon color="#F00" size={25} name="ios-trash" > Delete</Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onCancel}>
            <Icon color="#00F" size={25} name="ios-close"> Close</Icon>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  DetailContainer: {
    marginTop: 2
  },
  PlaceDetailBtn: {
    flex: 2, 
    flexDirection: "row",
    alignItems: "flex-start",
    margin: 10,
    justifyContent: 'space-around',
  }
});

/**
 * Map store state to props
 */
const mapStateToProps = state => {
  return {
    place: state.place.selectedPlace
  };
};

/**
 * Map action dispatching to props
 */
const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(actions.deselectPlace()),
    onDelete: () => dispatch(actions.removePlace())
  };
};

const myDeselectPlace = () => {
  return {
    type: "DESELECT_PLACE"
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
