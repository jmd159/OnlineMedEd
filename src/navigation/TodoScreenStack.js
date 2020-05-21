import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoScreen from "../screens/Todo";

const TodoStack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: "#024e56",
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
};

export default function TodoStackScreen() {
  return (
    <TodoStack.Navigator screenOptions={screenOptions}>
      <TodoStack.Screen name="TODOS" component={TodoScreen} />
    </TodoStack.Navigator>
  );
}
