import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
      }}
    >
      <View style={{ marginRight: 45 }}>
        <TouchableOpacity onPress={() => {props.back}}>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            letterSpacing: 0.75,
          }}
        >
          {props.title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <View style={{ paddingRight: 15 }}>
          <TouchableOpacity onPress={() => null}>
            <Fontisto name="bell-alt" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => null}>
            <MaterialIcons name="settings" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

export default Header;
