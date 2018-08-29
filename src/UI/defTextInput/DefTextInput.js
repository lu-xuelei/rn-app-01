import React from "react";
import { TextInput, StyleSheet } from "react-native";

/**
 * Default TextInput with:
 *  - width: 100%
 *  -
 * @param {Object} props
 */
const defTextInput = props => {
  return (
    <TextInput
      {...props}
      underlineColorAndroid="transparent"
      style={[styles.DefaultTextInput, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  DefaultTextInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  }
});

export default defTextInput;
