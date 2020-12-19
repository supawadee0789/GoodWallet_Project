import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WalletCard = (props) => {
  return (
    <View style={{...styles.card,...props.style}}>
      <View style={styles.content}>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.textTitle}>{props.wallet}</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.textNumber}>{props.money}</Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.textCurrency}>BATH</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 34,
    alignSelf: "center",
    height: 180,
    width: "88%",
    marginTop:60,
    marginBottom:37,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    color: "#A1A1A1",
    fontWeight: "900",
  },
  textNumber: {
    fontSize: 52,
    color: "#A890FE",
    fontWeight: "bold",
  },
  textCurrency: {
    fontSize: 14,
    color: "#A890FE",
    fontWeight: "900",
  },
});

export default WalletCard;
