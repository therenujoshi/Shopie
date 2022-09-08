import {View, StyleSheet,Text} from "react-native";
import React from "react";
import ProfileScreen from '../screens/ProfileScreen'
import CartScreen from '../screens/CartScreen'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Entypo, FontAwesome,FontAwesome5, MaterialCommunityIcons,AntDesign} from "@expo/vector-icons"
import { Pressable, Center } from "native-base";
import StackNav from '../navigations/StackNav';

const Tab=createBottomTabNavigator();
const CustomTab=({children, onPress})=>(
    <Pressable onPress={onPress} h={70} w={70} rounded="full" bg={'#48b600'} top={-30}
     shadow={2}>
      {children}
    </Pressable>
)

const BottomNav = ()=>{
    return (
        <Tab.Navigator backBehavior="main" initialRouteName="Main" 
            screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{...styles.tab},
            headerShown: false,
            tabBarHideOnKeyboard: true
        }}>
           <Tab.Screen name="Main" component={StackNav} options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <Entypo name="home" size={24} color={'#48b600'}/>
                        ) : <AntDesign name="home" size={24} color={'black'}/>
                        }
                    </Center>
                ),
           }} />

           {/* cart */}
           <Tab.Screen name="Cart" component={CartScreen} 
                options={{
                    tabBarButton:(props)=> <CustomTab {...props}/>,
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <FontAwesome5 name="shopping-basket" size={24} color={'white'}/>
                        ) : <MaterialCommunityIcons name="shopping-outline" size={24} color={'white'}/>
                        }
                    </Center>
                ),
           }} />
           
           {/* profile */}
           <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <FontAwesome name="user" size={24} color={'#48b600'}/>
                        ) : <AntDesign name="user" size={24} color={'black'}/>
                        }
                    </Center>
                ),
           }} />
        </Tab.Navigator>
    );
};

const styles=StyleSheet.create({
    tab:{
        elevation:0,
        backgroundColor: 'white',
        height:60,
    },
})
export default BottomNav;