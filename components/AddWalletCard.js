import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const AddWalletCard = (props) => {
    const [enteredValue,setEnterValue] = useState('');
    const numberInputHandler = inputText =>{
        setEnterValue(inputText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
    };
  return (
    <View style={styles.card}>
        <View style={styles.walletName}>
            <TextInput style={{height: 40 ,fontSize:22,paddingBottom:15,color:'#A1A1A1',textAlign:'center'}} underlineColorAndroid="#A1A1A1"
        placeholder="wallet name"/>
        </View>

      <TextInput style={{fontSize:50,paddingBottom:15,color:'#B58FE7ff',textAlign:'center'}} 
        placeholder="0"
        placeholderTextColor="#B58FE7ff"
        keyboardType = 'decimal-pad'
        autoCompleteType ="cc-number"
        maxLength={9}
        onChange={numberInputHandler}
        value={enteredValue}
        
         />
      <Text style={{ fontSize: 14, color: "#A890FE", fontWeight: "900" ,alignSelf:'center'}}>
        BATH
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 34,
    height: 252,
    width: 309,
    justifyContent:'space-between',
    paddingBottom:53
  },
  walletName:{
    alignItems:'center',
    paddingVertical:18,
  }
});

export default AddWalletCard;
