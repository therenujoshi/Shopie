import {Box, Button,Image,Heading,VStack, Input, View,Text} from 'native-base';
import React from 'react';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import { Pressable } from 'react-native';

const LoginScreen = ()=>{
    return (
        <Box flex={1} bg={'black'}>
            <Image flex={1} alt="Logo" 
                source = {require('../../assets/login.png')}
                resizeMode="cover"
                w="full"/>
            <Box w="full" h="full" position="absolute" top="0" left="0" bottom="0" right="0"
            px="6" 
                justifyContent="center"
            >
                <Heading>LOGIN</Heading>
                <VStack space={6} pt="6">
                    {/* email */}
                    <Input 
                        InputLeftElement={
                            <MaterialIcons name= "email" size={20} color={"black"}/>
                        }
                        variant="underlined" placeholder='user@gmail.com' w="70%" pl={2}
                        type="email" color={'black'} borderBottomColor={'black'}/>
               {/* password */}
               <Input 
                        InputLeftElement={
                            <Ionicons name= "eye" size={20} color={"black"}/>
                        }
                        variant="underlined" placeholder='******' w="70%" pl={2}
                        type="password"
                        color={'black'} borderBottomColor={'black'}/>
           
                </VStack>
                <Button _pressed={{ bg:'black'}} my={30} w="40%" rounded={50} 
                bg={'black'}>Login</Button>
                <Pressable mt={4}>
                    <Text color={"danger.500"}>SIGN UP</Text>
                </Pressable>
            </Box>
        </Box>
    );
}

export default LoginScreen;