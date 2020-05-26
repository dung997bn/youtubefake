import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

export default function Home() {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return <Card data={item} />;
        }}
        keyExtractor={(item) => item.id.videoId}
      ></FlatList>
    </View>
  );
}
