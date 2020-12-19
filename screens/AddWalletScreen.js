import React from "react";
import { View, StyleSheet, SafeAreaView, } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";
import AddWalletCard from "../components/AddWalletCard";
import CustomButton from "../components/Button";

const AddWalletScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="WALLET" />
      <View style={styles.content}>
        <AddWalletCard />
      </View>
      <View style={{alignItems:'center'}}>
         <CustomButton onPress={null} title='Add New Wallet' backgroundColor="#6A2388" fontColor={'#F4F6FF'} fontSize={22} width={290}/> 
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  content: {
      alignItems:'center',
      marginTop:81,
      marginBottom:40,
  },
});
export default AddWalletScreen;
