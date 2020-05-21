import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddTodo({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name="plus" size={50} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 10,
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#024e56",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
});
