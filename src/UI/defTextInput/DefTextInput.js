import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Primary } from "../styles/Colors";

/**
 * Default TextInput with:
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
    borderWidth: 2,
    borderColor: Primary.color4,
    padding: 5,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 20
  }
});

export default defTextInput;
