import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";
import LinearGradient from "react-native-linear-gradient";
import { Screen } from "../constants";

export default function TodoItem({ item, onPress, onLongPress, shadows }) {
  return (
    <TouchableOpacity
      key={item.id}
      onPress={onPress}
      style={[
        styles.touchable,
        { opacity: item.completed ? 0.5 : 1 },
        !item.completed && shadows,
      ]}
      onLongPress={onLongPress}
    >
      <LinearGradient
        colors={[item.color, "#C4E1E4"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.radio}>
          <RadioButton checked={item.completed} />
        </View>
        <View style={styles.columns}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.body}>{item.description}</Text>
          <Text style={styles.dateTitle}>
            <Text>{"TODO BY: \n"}</Text>
            <Text>{item.targetCompletion}</Text>
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 15,
    flex: 1,
  },
  columns: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
    flex: 1,
  },
  touchable: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
  },
  radio: {
    position: "absolute",
    right: 15,
    top: 15,
    marginLeft: 5,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  dateTitle: {
    position: "absolute",
    bottom: 10,
    fontWeight: "500",
  },
  body: {
    marginTop: 10,
    color: "black",
    fontSize: 13,
    fontWeight: "400",
  },
});
