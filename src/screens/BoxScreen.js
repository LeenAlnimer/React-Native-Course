import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
const BoxScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.ViewStyle} horizontal={true}>
      <Text style={[{ fontSize: 25 }, styles.TextStyle]}>child#1</Text>
      <Text style={[{ fontSize: 25, flex: 6 }, styles.TextStyle]}>child#2</Text>
      <Text style={[{ fontSize: 25 }, styles.TextStyle]}>child#3</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  ViewStyle: {
    borderWidth: 7,
    borderColor: "#d896ff",
    marginVertical: 30,
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextStyle: {
    borderWidth: 3,
    borderColor: "red",
    marginVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: 30,
    alignItems: "flex-start",
  },
});
export default BoxScreen;
