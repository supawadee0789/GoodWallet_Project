import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import Header from "../components/Header";
import WalletCard from "../components/WalletCard";
import MinorCard from "../components/MinorCard";


const WalletScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header title="WALLET" />
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
