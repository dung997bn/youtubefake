import React, { useState } from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { MiniCard } from "../components/MiniCard";
import Constants from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

//curl \
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=firebase&type=video&key=AIzaSyA4UzGOIVzIUQNGNT0vcA_GApRwM1rtcmw' \
// --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
// --header 'Accept: application/json' \
// --compressed

const Search = ({ mavigation }) => {
  const [value, setValue] = useState("");
  const miniCardData = useSelector((state) => {
    return state.cardData;
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBmmiI4slawfC998ba8apEY7YpFmHETOzM`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
      });
  };

  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          marginTop: Constants.statusBarHeight,
        }}
      >
        <Ionicons
          name="md-arrow-back"
          size={32}
          onPress={() => {
            navigation.goBack();
          }}
          color={colors.iconColor}
        />
        <TextInput
          value={value}
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name="md-send"
          size={32}
          onPress={() => fetchData()}
          color={colors.iconColor}
        />
      </View>
      {loading && (
        <ActivityIndicator size="large" style={{ marginTop: 10 }} color="red" />
      )}

      <FlatList
        data={miniCardData}
        renderItem={(item) => {
          return <MiniCard data={item} />;
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default Search;
