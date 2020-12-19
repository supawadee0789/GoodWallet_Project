import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = ({
  onPress,
  title,
  backgroundColor,
  fontColor,
  fontSize,
  width,
  height,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        backgroundColor && { backgroundColor },
        width && { width },
        height && { height }
      ]}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: fontColor, fontSize: fontSize }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 260,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
  },
});

export default Button;
