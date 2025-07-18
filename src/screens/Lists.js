// import React from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// const ListScreen = () => {
//   const Friends = [
//     { name: "Leen" },
//     { name: "Sama" },
//     { name: "Ski" },
//     { name: "Rozi" },
//     { name: "Agila" },
//   ];

//   return (
//     <FlatList
//       data={Friends}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <Text style={{ fontSize: 30 }}>{item.name}</Text>
//       )}
//     />
//   );
// };

// // const styles = StyleSheet.create({});
// export default ListScreen;
import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = function () {
  const FriendAge = [
    { id: "1", name: "Friend1", Age: 20 },
    { id: "2", name: "Friend2", Age: 45 },
    { id: "3", name: "Friend3", Age: 35 },
    { id: "4", name: "Friend4", Age: 27 },
    { id: "5", name: "Friend5", Age: 53 },
    { id: "6", name: "Friend6", Age: 30 },
  ];

  return (
    <FlatList
      data={FriendAge}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 30 }}>
          {item.name} - Age {item.Age}
        </Text>
      )}
    />
  );
};

export default ListScreen;
