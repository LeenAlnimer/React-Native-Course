// import React from "react";
// import { Text, StyleSheet, View } from "react-native";

// const ComponentsScreen = () => {
//   const CourseName = "This  is  React Native Course ";
//   const greeting = <Text style={{ fontSize: 30 }}> Hi in this Course </Text>;
//   return (
//     <View>
//       <Text style={styles.textStyle}>This is the Components Screen </Text>
//       {greeting}
//       <Text style={{ fontSize: 20 }}>I am Leen Whats Up Are you good </Text>
//       <Text style={{ fontSize: 23 }}>{CourseName}</Text>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 35,
//   },
// });
// export default ComponentsScreen;
import react from "react";
import { Text, StyleSheet, View, Button } from "react-native";
const ComponentsScreen = (props) => {
  const MyName = <Text style={{ fontSize: 20 }}>My Name is Leen </Text>;
  return (
    <View>
      <Text style={{ fontSize: 45 }}>Getting started with React Native !</Text>
      {MyName}
      <Button
        title="Go  to  List Screen"
        onPress={() => props.navigation.navigate("List")}
      />
    </View>
  );
};
export default ComponentsScreen;
