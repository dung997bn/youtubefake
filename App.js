import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subcrible from "./src/screens/Subcrible";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Subcrible" component={Subcrible} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="RootHome" component={RootHome} />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "sear" }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{ title: "searf" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
