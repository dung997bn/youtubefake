import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subcrible from "./src/screens/Subcrible";
import "react-native-gesture-handler";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import moduleName from "./src/reducer/reducer";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Redux
import { Provider, useSelector } from "react-redux";
import reducers from "./src/reducer/reducer";
import themeReducers from "./src/reducer/themeReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  cardData: reducers,
  darkMode: themeReducers,
});
const store = createStore(rootReducer);

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#050000",
    iconColor: "white",
    tabIcon: "white",
  },
};
const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const RootHome = () => {
  const { colors } = useTheme();
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
        activeTintColor: colors.tabIcon,
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
      <Navigation />
    </Provider>
  );
};

export function Navigation() {
  let currtentTheme = useSelector((state) => {
    return state.darkMode;
  });
  return (
    <NavigationContainer
      theme={currtentTheme ? customDarkTheme : customDefaultTheme}
    >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
