import { Platform } from "react-native";

/**
 * Platform dependent information
 */
export const isIOS = Platform.OS === "ios";

export const iconPrefix = isIOS ? "ios-" : "md-";
