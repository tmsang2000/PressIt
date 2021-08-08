import { StyleSheet } from "react-native";
import { BaseColor } from "@config";
import * as Utils from "@utils";

export default StyleSheet.create({
  loading: {
    position: 'absolute',
    width:"100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    marginBottom: 50
  }
});