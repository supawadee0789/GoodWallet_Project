import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/startScreen";
import Header from "./components/Header";
import WalletCard from "./components/WalletCard";

export default function App() {
  return (
    <LinearGradient
      colors={["#AF90F2", "#DF8D9F"]}
      style={{ flex: 1, paddingVertical: 40 }}
    >
      <Header title="WALLET"/>
      <WalletCard style={{marginTop:60}} wallet="Total" money="0"/>
      {/* <StartScreen /> */}
    </LinearGradient>
  );
}
