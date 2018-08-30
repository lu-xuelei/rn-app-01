import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { btnAction } from "../styles/BtnStyles";

/**
 * Call-to-action button
 * @param {Object} props
 */

const actButton = props => {
  // By default, use default button styles
  let btnStyle = btnAction.btnNormal;
  let txtStyle = btnAction.txtNormal;

  // switch to different style if type is provided
  if (props.type === "danger") {
    btnStyle = btnAction.btnDanger;
    txtStyle = btnAction.txtDanger;
  }

  return (
    <TouchableOpacity style={[btnStyle, props.vStyle]} onPress={props.onPress}>
      <Text style={[txtStyle, props.tStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default actButton;
