import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from '../screens/startScreen';
import WalletScreen from '../screens/WalletScreen';
import AddWalletScreen from '../screens/AddWalletScreen';


const WalletNavigator = createStackNavigator({
    Start: StartScreen,
    Wallet: WalletScreen,
    AddWallet: AddWalletScreen,
},
{
    headerMode: 'none',
    mode: "modal",
    transparentCard: true
  });

export default createAppContainer(WalletNavigator);