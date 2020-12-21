import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CustomButton from "./Button";


const AddWalletCard = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const [enteredName,setEnteredName]= useState("");
  
  const pressHandler=()=>{
    console.log(enteredValue);
    console.log(enteredName);
  };
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.walletName}>
          <TextInput
            style={{
              height: 40,
              fontSize: 22,
              paddingBottom: 15,
              color: "#A1A1A1",
              textAlign: "center",
            }}
            underlineColorAndroid="#A1A1A1"
            placeholder="wallet name"
            onChangeText ={text => setEnteredName(text)}
            value = {enteredName}
          />
        </View>

        <TextInput
          style={{
            fontSize: 50,
            paddingBottom: 15,
            color: "#B58FE7ff",
            textAlign: "center",
            fontWeight: "bold",
          }}
          placeholder="0"
          placeholderTextColor="#B58FE7ff"
          keyboardType="decimal-pad"
          maxLength={9}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <Text
          style={{
            fontSize: 14,
            color: "#A890FE",
            fontWeight: "900",
            alignSelf: "center",
          }}
        >
          BATH
        </Text>
      </View>
      <View style={{ alignItems: "center" ,marginTop:40}}>
        <CustomButton
          onPress={pressHandler}
          title="Add New Wallet"
          backgroundColor="#6A2388"
          fontColor={"#F4F6FF"}
          fontSize={22}
          width={290}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 34,
    height: 252,
    width: 309,
    justifyContent: "space-between",
    paddingBottom: 53,
  },
  walletName: {
    alignItems: "center",
    paddingVertical: 18,
  },
});

export default AddWalletCard;
