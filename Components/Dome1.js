import React from "react";
import { View, Text } from "react-native";

export default function Demo1(){
  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498db",
      }}
    >
      {/* Comment in react native */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          //textTransform: "uppercase",
        }}
      >
        Welcome to React native
      </Text>
    </View>
  );
}