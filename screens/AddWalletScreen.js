import React from "react";
import { View, StyleSheet, SafeAreaView, } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";
import AddWalletCard from "../components/AddWalletCard";
import CustomButton from "../components/Button";
import ListItem from '../components/ListWallet'

const AddWalletScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="WALLET" backBtn={()=>props.navigation.goBack()} />
      <View style={styles.content}>
        <AddWalletCard />
      </View>
      <ListItem/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  content: {
      alignItems:'center',
      marginTop:81,
      marginBottom:40,
  },
});
export default AddWalletScreen;
