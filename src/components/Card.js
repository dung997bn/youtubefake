import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1589729866904-42681a0b1f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          margin: 5,
        }}
      >
        <MaterialIcons name="account-circle" size={32} color="#212121" />
        <View style={{ marginLeft: 6 }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{ fontSize: 20, width: Dimensions.get("screen").width - 30 }}
          >
            This is amazing project This is amazing project This is amazing
            project This is amazing projectThis is amazing project
          </Text>
          <Text>This is amazing project </Text>
        </View>
      </View>
    </View>
  );
};
export default Card;
