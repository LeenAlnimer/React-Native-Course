import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "./components/ImageDetail";
//image detail deals  with it  like  primitive
const ImageScreen = () => {
  return (
    <ScrollView>
      <ImageDetail
        title="Fashion Agency"
        imageSource={require("../assets/images/fashionschool.jpg")}
        score={9}
      />
      <ImageDetail
        title="Fashion Designer"
        imageSource={require("../assets/images/fashiondesigner.jpg")}
        score={7}
      />
      <ImageDetail
        title="Fashion Model"
        imageSource={require("../assets/images/fashionmodel.jpg")}
        score={10}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default ImageScreen;
