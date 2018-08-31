import { StyleSheet } from "react-native";
import {Primary, Neutrals} from './Colors'
const HEADING = {
  fontFamily: "Arial",
  color: Primary.color1,
  fontStyle: "normal",
  fontWeight: "bold",
  backgroundColor: "transparent"
};

export const txtHeadings = StyleSheet.create({
  Heading1: {
    ...HEADING,
    fontSize: 28
  },
  Heading2: {
    ...HEADING,
    fontSize: 24
  }
});

export const txtLabels = StyleSheet.create({
  Short: {
    fontFamily: "Arial",
    color: Primary.color1,
    fontWeight: "bold"
  }
});
