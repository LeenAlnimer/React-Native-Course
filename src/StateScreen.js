import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
const StateScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    //prettier-ignore
    <View>
      <Text style={{ color:'hsl(330, 81.70%, 49.40%)', textAlign: "center", fontSize: 20 }}>
        This is my Screen Status:
      </Text>
      <Button title="Increase" 
      onPress={()=>{
        setCounter(counter+1);
      }}
      />
      <Button title="Decrease"
      onPress={()=>{
     setCounter(counter-1);
      }}
      />
      <Text>Current  Counter: {counter}</Text>
    </View>
  );
};
export default StateScreen;
