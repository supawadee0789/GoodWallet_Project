import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const AddWalletButtonBar = ({onPressed} )=> {
    return (
        <TouchableOpacity onPress={onPressed}>
           <View style={{backgroundColor:'#E5A9B6', height:60,width:'100%', borderTopLeftRadius:20,borderTopRightRadius:20,justifyContent:'center',alignSelf:'flex-end'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{color:'white',fontSize:18}}>Add New Wallet</Text>
            </View>  
        </View> 
        </TouchableOpacity>
        
    );
};

export default AddWalletButtonBar;