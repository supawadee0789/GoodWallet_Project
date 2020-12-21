import React from "react";
import { ListItem } from "react-native-elements";
import { View , StyleSheet} from "react-native";

const ListWallet = (props) => {
  const list = [
    {
      name: "saving1",
      money: 200,
    },
    {
      name: "saving2",
      money: 300,
    },
  ];
  return (
    <View>
      {list.map((l, i) => (
        <ListItem  key={i} containerStyle={styles.container} onPress={()=>console.log(i)}>
          <ListItem.Content style = {styles.content}>
              <ListItem.Title style ={styles.textTitle}>{l.name}</ListItem.Title>
              <ListItem.Subtitle style ={ styles.textMoney}>{l.money}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:"88%",
        height:80,
        borderRadius:34,
        marginTop:14,
        alignSelf:'center',
        justifyContent:'center',
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:40,
        alignItems:'center'
    },
    textTitle:{
        color:'#A1A1A1',
        fontSize:22,
    },
    textMoney:{
        color:'#A890FE',
        fontSize:32,
        fontWeight:'bold',
    }
});

export default ListWallet;
