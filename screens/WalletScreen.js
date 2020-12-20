import React from "react";
import {SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import Header from "../components/Header";
import WalletCard from "../components/WalletCard";
import MinorCard from "../components/MinorCard";
import AddWalletButtonBar from "../components/AddWalletButtonBar";



const WalletScreen = props =>{
    return (
    <SafeAreaView style={styles.container}>
        <Header title="WALLET" backBtn={()=>props.navigation.goBack()}  />
        <WalletCard wallet="Total" money="0" />
        <ScrollView >
        <MinorCard wallet="Saving" money="20,000" />
        <MinorCard wallet="Cash" money="2,000" />
        <MinorCard wallet="Cash" money="2,000" />
        <MinorCard wallet="Cash" money="2,000" />
        <MinorCard wallet="Cash" money="2,000" />
        <MinorCard wallet="Cash" money="2,000" />
        <MinorCard wallet="Cash" money="2,000" />
      </ScrollView>
      <AddWalletButtonBar onPressed={()=>props.navigation.navigate('AddWallet')}/>
    </SafeAreaView>
  );
};
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
  });

export default WalletScreen;
