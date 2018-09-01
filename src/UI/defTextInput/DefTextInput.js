import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Primary, Secondary } from "../styles/Colors";

/**
 * Default TextInput with:
 * @param {Object} props
 */
const defTextInput = props => {
  const invalidStyle = props.invalid ? styles.InvalidValue : null;
  return (
    <TextInput
      {...props}
      underlineColorAndroid="transparent"
      style={[styles.DefaultTextInput, props.style, invalidStyle]}
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
  },
  InvalidValue: {
    borderColor: Secondary.red2,
    backgroundColor: Secondary.red3,
  }
});

export default defTextInput;
