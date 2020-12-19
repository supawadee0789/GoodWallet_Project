import React from "react";
import { TouchableWithoutFeedback ,Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/startScreen";
import AddWalletScreen from "./screens/AddWalletScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={["#AF90F2", "#DF8D9F"]}
        style={{ flex: 1, paddingTop: 15 }}
      >
        <AddWalletScreen />

        {/* <StartScreen /> */}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
