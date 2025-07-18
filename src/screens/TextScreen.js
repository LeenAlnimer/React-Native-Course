import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 25, color: "blue" }}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={{ fontSize: 20 }}>My name is :{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
