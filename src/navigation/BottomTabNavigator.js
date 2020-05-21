import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoStackScreen from "./TodoScreenStack";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const tabOptions = {
  style: {
    backgroundColor: "#024e56",
  },
  activeTintColor: "#00bcd4",
  labelStyle: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    marginTop: -9,
  },
  inactiveTintColor: "gray",
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // You can return any component that you like here!
          return (
            <Ionicons
              name="ios-list"
              size={30}
              color={focused ? "#00bcd4" : "gray"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Todos" component={TodoStackScreen} />
    </Tab.Navigator>
  );
}
