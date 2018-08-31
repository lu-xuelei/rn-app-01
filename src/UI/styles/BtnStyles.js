import { StyleSheet } from "react-native";
import {Primary, Secondary} from './Colors';

const BTN_VIEW = {
  overflow: "visible",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  borderColor: "#FAE954",
  borderRadius: 50,
  borderStyle: "solid",
  borderWidth: 2,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 20,
  paddingRight: 20,
  margin: 1,
};

const BTN_TEXT = {
  fontSize: 18,
  fontWeight: "bold",
  color: "white"
};

export const btnDefault = StyleSheet.create({
  btnNormal: {
    ...BTN_VIEW,
    backgroundColor: Primary.color1,
  },
  btnDisabled: {
    ...BTN_VIEW,
    backgroundColor: Primary.color4,
  },
  btnText: {
    ...BTN_TEXT
  }
});

export const btnDanger = StyleSheet.create({
  btnNormal: {
    ...BTN_VIEW,
    backgroundColor: Secondary.red1,
  },
  btnDisabled: {
    ...BTN_VIEW,
    backgroundColor: Secondary.red3,
  },
  btnText: {
    ...BTN_TEXT
  }
});

export const btnSuccess = StyleSheet.create({
  btnNormal: {
    ...BTN_VIEW,
    backgroundColor: Secondary.green1,
  },
  btnDisabled: {
    ...BTN_VIEW,
    backgroundColor: Secondary.green3,
  },
  btnText: {
    ...BTN_TEXT
  }
});

/**
 * For call-to-action buttons
 */
export const btnAction = StyleSheet.create({
  btnNormal: {
    ...BTN_VIEW,
    backgroundColor: 'white',
    borderColor: Primary.color1,
  },
  txtNormal: {
    ...BTN_TEXT,
    color: Primary.color1,
  },
  btnDanger: {
    ...BTN_VIEW,
    backgroundColor: "white",
    borderColor: Secondary.red1,
  },
  txtDanger: {
    ...BTN_TEXT,
    color: Secondary.red1,
  }
});

