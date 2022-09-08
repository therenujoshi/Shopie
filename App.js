
import {StyleSheet} from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import OrderScreen from './src/screens/OrderScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/navigations/BottomNav'

const Stack= createNativeStackNavigator();

const App = ()=>{
return (
  <NativeBaseProvider>
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Order" component={OrderScreen}/>
        <Stack.Screen name="Bottom" component={BottomNav}/>
      </Stack.Navigator>

    </NavigationContainer>
  </NativeBaseProvider>
 
);
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:"center",
    alignItems: "center"
  }
});

export default App;