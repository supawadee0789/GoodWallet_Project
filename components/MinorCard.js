import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const MinorCard = props => {
    return(
        <View style ={styles.card}>
            <View style={styles.textContrainer}>
                <Text style={styles.textWallet}>{props.wallet}</Text>
                <Text style={styles.textNumber}>{props.money}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        width:"88%",
        height:80,
        borderRadius:34,
        marginTop:14,
        alignSelf:'center',
        justifyContent:'center',
    },
    textContrainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:40,
        alignItems:'center'
    },
    textWallet:{
        color:'#A1A1A1',
        fontSize:22,
    },
    textNumber:{
        color:'#A890FE',
        fontSize:32,
        fontWeight:'bold',
    }
});

export default MinorCard;