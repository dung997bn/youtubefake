import React, { useState } from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { MiniCard } from "../components/MiniCard";

export const Search = () => {
  const [value, setValue] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
        }}
      >
        <Ionicons name="md-arrow-back" size={32} />
        <TextInput
          value={value}
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          onChange={(text) => setValue(text)}
        />
        <Ionicons name="md-send" size={32} />
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
    </View>
  );
};
