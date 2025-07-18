import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there </Text>

      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <TouchableOpacity onPress={() => console.log("Press")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Image")}
        style={{
          backgroundColor: "#FFC0CB", // زهري فاتح
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20,
          alignSelf: "center", // يخلي الزر بحجمه الصغي
          marginTop: 10,
        }}
      >
        <Text style={{ color: "black", textAlign: "center", fontSize: 14 }}>
          Go to Image Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("State")}
        style={{
          backgroundColor: "#e0e3d0",

          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20,
          alignSelf: "center", // يخلي الزر بحجمه الصغي
          marginTop: 10,
        }}
      >
        <Text> State Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Color")}
        style={{
          backgroundColor: "#E64A19",

          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20,
          alignSelf: "center", // يخلي الزر بحجمه الصغي
          marginTop: 10,
        }}
      >
        <Text> Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Screen")}
        style={{
          backgroundColor: "#50c7c7",

          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20,
          alignSelf: "center", // يخلي الزر بحجمه الصغي
          marginTop: 10,
        }}
      >
        <Text>Go to Square Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Text")}
        style={{
          backgroundColor: "#2596be",

          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20,
          alignSelf: "center", // يخلي الزر بحجمه الصغي
          marginTop: 10,
        }}
      >
        <Text> Text Screen </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Password")}
        style={{
          backgroundColor: "#eab676",

          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20,
          alignSelf: "center", // يخلي الزر بحجمه الصغي
          marginTop: 10,
        }}
      >
        <Text>Go to Password Screen </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
