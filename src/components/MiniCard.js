import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
export const MiniCard = ({ data }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoPlayer", {
          videoId: data.item.id.videoId,
          title: data.item.snippet.title,
        })
      }
    >
      <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${data.item.id.videoId}/hqdefault.jpg`,
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
            style={{
              fontSize: 18,
              width: Dimensions.get("screen").width / 2,
              color: textColor,
            }}
          >
            {data.item.snippet.title}
          </Text>
          <Text style={{ fontSize: 12, color: textColor }}>
            {data.item.snippet.channelTitle}{" "}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
