import {Center,Heading,Image, Text} from 'native-base';
import React from 'react';
import Tabs from '../components/Profile/Tabs'

const ProfileScreen = ()=>{
    return (
        <>
            <Center bg={'#48b600'} pt={10} pb={6}>
                <Image source={require('../../assets/avatar3.png')}
                alt="profile" w={24} h={24} resizeMode="cover"/>
                <Heading bold fontSize={15} isTruncated my={2} color={'white'}>
                    Admin Sir
                </Heading>
                <Text italic fontSize={10} color={'white'}>Joined Dec 12, 2022</Text>
             </Center>
        {/* tabs */}
            <Tabs/>
        </>
      
    );
}

export default ProfileScreen;