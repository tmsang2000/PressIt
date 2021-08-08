import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  contentAction: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 24
  },
  notification: {
    position: 'absolute',
    marginBottom: 100,
    width: '100%',
    height: '93%',
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  icon: {
    marginHorizontal: 10
  }
});
