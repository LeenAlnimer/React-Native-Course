import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: "#FF1493" }}>{props.title}</Text>
      <Image source={props.imageSource} style={{ width: 300, height: 400 }} />
      <Text>Image score-{props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
