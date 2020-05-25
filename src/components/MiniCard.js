import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const MiniCard = ({ data }) => {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${data.id.videoId}/hqdefault.jpg`,
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
          {data.snippet.title}
        </Text>
        <Text style={{ fontSize: 12 }}>{data.snippet.channelTitle} </Text>
      </View>
    </View>
  );
};
