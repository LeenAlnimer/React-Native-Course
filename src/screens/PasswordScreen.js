import react, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
const PasswordScreen = () => {
  const [password, changepassword] = useState("");
  //prettier-ignore
  return (
    <View>
      <Text style={{ fontSize: 25, color: "blue" }}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter Password"
        value={password}
        onChangeText={newValue => changepassword(newValue)}
      />
    
      {password.length <= 5 ? <Text>Password must be longer than 5 characters </Text> : null}
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
export default PasswordScreen;
