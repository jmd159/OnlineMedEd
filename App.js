import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import TodoScreen from "./src/screens/Todo";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
