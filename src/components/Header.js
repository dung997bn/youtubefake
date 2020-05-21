import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
export default function Header() {
  const mycolor = "#212121";
  return (
    <View
      style={{
        height: 45,
        backgroundColor: "white",
        marginTop: Constants.statusBarHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 3
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <AntDesign
          style={{ marginLeft: 10 }}
          name="youtube"
          size={32}
          color="red"
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: "bold",
            color: { mycolor },
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          justifyContent: "space-around",
          width: 150,
        }}
      >
        <Ionicons name="md-videocam" size={32} color={mycolor} />
        <Ionicons name="md-search" size={32} color={mycolor} />
        <MaterialIcons name="account-circle" size={32} color={mycolor} />
      </View>
    </View>
  );
}
