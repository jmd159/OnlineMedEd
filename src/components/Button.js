import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function Button({
  title,
  fill,
  onPress,
  textStyle,
  containerStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
