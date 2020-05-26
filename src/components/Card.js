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
import { useNavigation } from "@react-navigation/native";

const Card = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoPlayer", {
          videoId: data.id.videoId,
          title: data.snippet.title,
        })
      }
    >
      <View style={{ marginBottom: 10 }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${data.id.videoId}/hqdefault.jpg`,
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
              style={{
                fontSize: 20,
                width: Dimensions.get("screen").width - 30,
              }}
            >
              {data.snippet.title}
            </Text>
            <Text>{data.snippet.channelTitle} </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
