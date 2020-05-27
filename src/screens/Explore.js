import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";

const LittleCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: 180,
        height: 50,
        borderRadius: 4,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          marginTop: 5,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <LittleCard name="Gaming" />
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="News" />
          <LittleCard name="Movies" />
          <LittleCard name="Fashion" />
        </View>
        <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1 }}>
          Trending Videos
        </Text>
        <FlatList
          data={cardData}
          renderItem={({ item }) => {
            return <Card data={item} />;
          }}
          keyExtractor={(item) => item.id.videoId}
        ></FlatList>
      </ScrollView>
    </View>
  );
};

export default Explore;
