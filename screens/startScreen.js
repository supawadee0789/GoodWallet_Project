import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import logo from "../assets/logo.png";



const StartScreen = props =>{
    return (
    <View style={{flex:1,alignContent:'stretch' ,alignItems:'center',flexDirection:'column'}}>
      <View style={{flex:1,justifyContent:'center'}}>
        <Image source={logo} />
      </View>
      <View style={{justifyContent:'flex-end',paddingBottom:40}}> 
        <TouchableOpacity onPress={() => props.navigation.navigate('Wallet')}>
          <Text style={{ color: "white", fontSize: 25 }}>
            SWIPE UP{"\n"}TO START
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

  
export default StartScreen;
