import React from "react";
import { View, StyleSheet } from "react-native";

export default function RadioButton({ checked }) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.filled,
          { backgroundColor: checked ? "white" : "transparent" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 15,
    height: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  filled: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
  },
});
