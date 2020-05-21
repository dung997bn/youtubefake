import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const MiniCard = () => {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1589729866904-42681a0b1f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        }}
        style={{
          width: "45%",
          height: 100,
        }}
      />
      <View style={{ marginLeft: 7 }}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={{ fontSize: 18, width: Dimensions.get("screen").width / 2 }}
        >
          This is amazing project   This is amazing project   This is amazing project   This is amazing project   This is amazing project
        </Text>
        <Text style={{ fontSize: 12 }}>This is amazing project </Text>
      </View>
    </View>
  );
};
