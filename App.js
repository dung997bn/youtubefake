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
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Redux
import { Provider } from "react-redux";
import store from "./src/reducer/reducer";

const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "explore";
          } else if (route.name === "Subcrible") {
            iconName = "subscriptions";
          }
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Subcrible" component={Subcrible} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
