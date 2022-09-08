import {Box, Button,Image,Heading,VStack, Input,Text} from 'native-base';
import React from 'react';
import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
import { Pressable } from 'react-native';

const RegisterScreen = ({navigation})=>{
    return (
        <Box flex={1} bg={'black'}>
        <Image 
            flex={1} 
            alt="Logo" 
            source = {require('../../assets/login.png')}
            resizeMode="cover"
            w="full"/>
        <Box 
            w="full" 
            h="full" 
            position="absolute" 
            top="0" left="0" 
            bottom="0" 
            right="0"
            px="6" 
            justifyContent="center"
        >
            <Heading>SIGN UP</Heading>
            <VStack space={6} pt="6">
                {/* username */}
                <Input 
                    InputLeftElement={
                        <FontAwesome name= "user" size={20} color={"black"}/>
                    }
                    variant="underlined" placeholder='John Doe' w="70%" pl={2} type="text"
                    color={'black'} borderBottomColor={'black'}/>
                {/* email */}
                <Input 
                    InputLeftElement={
                        <MaterialIcons name= "email" size={20} color={"black"}/>
                    }
                    variant="underlined" placeholder='user@gmail.com' w="70%" pl={2} type="email"
                    color={'black'} borderBottomColor={'black'}/>
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
            bg={'black'} onPress={()=>navigation.navigate("Bottom")}>SIGN UP</Button>
            <Pressable mt={4} onPress={()=>navigation.navigate("Login")}>
                <Text color={"danger.500"}>LOGIN</Text>
            </Pressable>
        </Box>
    </Box>
    );
}

export default RegisterScreen;