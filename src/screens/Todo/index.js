import React from "react";
import { View, Text } from "react-native";
import TodoItem from "../../components/TodoItem";

const todos = {
  id: 1,
  name: 'something',
  targetCompletion: '',
  actualCompletion: '',
}

export default function TodoScreen() {
  return (
    <View>
      <Text> Something </Text>
      <TodoItem item={todos}/>
    </View>
  );
}
