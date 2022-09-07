import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import NotVerifyScreen from './src/screens/NotVerifyScreen';

const App = ()=>{
return (
  <NativeBaseProvider>
    <HomeScreen/>
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