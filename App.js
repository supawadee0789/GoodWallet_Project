import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/startScreen";

export default function App() {
  return (
    <LinearGradient
      colors={["#AF90F2", "#DF8D9F"]}
      style={{ flex: 1, paddingVertical: 40 }}
    >
      <StartScreen />
    </LinearGradient>
  );
}
