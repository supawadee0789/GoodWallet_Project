import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "../screens/startScreen";
import WalletScreen from '../screens/WalletScreen';
import AddWalletScreen from '../screens/AddWalletScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "transparent",
            shadowColor: "transparent",
          },
        }}
      >
        <Stack.Screen name="Home" component={Start} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="AddWallet" component={AddWalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
