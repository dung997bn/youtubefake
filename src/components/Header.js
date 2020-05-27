import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const mycolor = colors.iconColor;

  const dispatch = useDispatch();
  const currentDarkMode = useSelector((state) => {
    return state.darkMode;
  });
  return (
    <View
      style={{
        height: 45,
        backgroundColor: colors.headerColor,
        marginTop: Constants.statusBarHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 3,
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
            color: "#212121",
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
        <Ionicons
          name="md-search"
          size={32}
          color={mycolor}
          onPress={() => {
            navigation.navigate("search");
          }}
        />
        <MaterialIcons
          name="account-circle"
          size={32}
          color={mycolor}
          onPress={() => {
            dispatch({ type: "change_theme", payload: !currentDarkMode });
          }}
        />
      </View>
    </View>
  );
}
