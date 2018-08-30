import { StyleSheet } from "react-native";

const BTN_VIEW = {
  overflow: "visible",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  borderColor: "#FAE954",
  borderRadius: 50,
  borderStyle: "solid",
  borderWidth: 2,
  paddingTop: 10,
  paddingBottom: 10,
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
    backgroundColor: "#004087",
  },
  btnDisabled: {
    ...BTN_VIEW,
    backgroundColor: "#8DC3EA",
  },
  btnText: {
    ...BTN_TEXT
  }
});

export const btnDanger = StyleSheet.create({
  btnNormal: {
    ...BTN_VIEW,
    backgroundColor: "#F84746",
  },
  btnDisabled: {
    ...BTN_VIEW,
    backgroundColor: "#FFCBD0",
  },
  btnText: {
    ...BTN_TEXT
  }
});

export const btnSuccess = StyleSheet.create({
  btnNormal: {
    ...BTN_VIEW,
    backgroundColor: "#00B460",
  },
  btnDisabled: {
    ...BTN_VIEW,
    backgroundColor: "#B8E9CE",
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
    backgroundColor: "#FFFFFF",
    borderColor: "#004087",
  },
  txtNormal: {
    ...BTN_TEXT,
    color: "#004087",
  },
  btnDanger: {
    ...BTN_VIEW,
    backgroundColor: "#FFFFFF",
    borderColor: "#F84746",
  },
  txtDanger: {
    ...BTN_TEXT,
    color: "#F84746",
  }
});

