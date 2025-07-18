import React from "react";
import { Text, ScrollView, StyleSheet, View, Button } from "react-native";
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};
const style = StyleSheet.create({});
export default ColorCounter;
