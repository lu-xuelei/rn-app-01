import React from 'react';
import {View, Text} from 'react-native';
import { connect } from "react-redux";

import {addPlace} from '../../store/actions/Actions';

import PlaceController from '../../containers/placeController/PlaceController';

class AddPlaceScreen extends React.Component {
  render () {
    return (
      <View>
        <PlaceController addPlace={this.props.onAddPlace}/>
      </View>
    )
  }
}

/**
 * Map store state to props
 */
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
  }
}

export default connect(null, mapDispatchToProps)(AddPlaceScreen);