import { StyleSheet } from "react-native";

const HEADING = {
  fontFamily: 'Arial',
  color: 'blue',
  fontStyle: "normal",
  fontWeight: "bold",
  backgroundColor: "transparent"
}

export const txtHeadings = StyleSheet.create({
  Heading1: {
    ...HEADING,
    fontSize: 28,
  },
  Heading2: {
    ...HEADING,
    fontSize: 24,
  }
});

export const Normal = StyleSheet.create({

});
