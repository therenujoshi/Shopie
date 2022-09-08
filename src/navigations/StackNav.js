import {View, Text} from 'react-native';
import React from 'react';

import HomeScreen from "../screens/HomeScreen";
import SingleProductScreen from "../screens/SingleProductScreen";
import ShippingScreen from "../screens/ShippingScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();
const StackNav = ()=>{
    return (
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Single" component={SingleProductScreen}/>
        <Stack.Screen name="Shipping" component={ShippingScreen}/>
        <Stack.Screen name="Checkout" component={PaymentScreen}/>
        <Stack.Screen name="Placeorder" component={PlaceOrderScreen}/>
      </Stack.Navigator>
    )
}

export default StackNav;