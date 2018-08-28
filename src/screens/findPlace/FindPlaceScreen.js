import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import ListContainer from '../../containers/listContainer/ListContainer';

class FindPlaceScreen extends React.Component {
  render() {
    return (
      <View>
        <ListContainer places={this.props.places}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.place.places
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPlaceScreen);
