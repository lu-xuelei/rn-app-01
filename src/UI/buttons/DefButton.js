import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { btnDefault, btnSuccess, btnDanger } from "../styles/BtnStyles";

/**
 * Default button
 * @param {Object} props
 */

const defButton = props => {
  // By default, use default button styles
  let btnStyles = btnDefault;

  // switch to different style if type is provided
  if (props.type === "danger") {
    btnStyles = btnDanger;
  } else if (props.type === "success") {
    btnStyles = btnSuccess;
  }

  const btnText = (
    <Text style={[btnStyles.btnText, props.tStyle]}>{props.title}</Text>
  );

  // Use disabled style if necessary
  if (props.disabled) {
    return <View style={[btnStyles.btnDisabled, props.vStyle]}>{btnText}</View>;
  }

  return (
    <TouchableOpacity
      style={[btnStyles.btnNormal, props.vStyle]}
      onPress={props.onPress}
    >
      {btnText}
    </TouchableOpacity>
  );
};

export default defButton;
