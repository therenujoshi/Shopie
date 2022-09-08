import {Box,FormControl,Input,ScrollView,Text, VStack} from 'native-base';
import React from 'react';
import CustomButton from '../CustomButton';

const Inputs=[
    {
        label:"USERNAME",
        type: "text"
    },
    {
        label:"EMAIL",
        type: "email"
    },
    {
        label:"NEW PASSWORD",
        type: "password"
    },
    {
        label:"CONFIRM PASSWORD",
        type: "password"
    }
]

const Profile = ()=>{
    return (
        <Box h="full" bg={'white'} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {Inputs.map((i, index)=>(
                    <FormControl key={index}>
                        <FormControl.Label 
                            _text={{
                                fontSize:"12px",
                                fontWeight:"bold",
                            }}
                        >
                            {i.label}
                        </FormControl.Label>
                        <Input 
                            borderWidth={0.2}
                            bg={'emerald.200'}
                            borderColor={'#48b600'}
                            py={4}
                            type={i.type}
                            color={'black'}
                            fontSize={15}
                            _focus={{bg:'emerald.200', borderColor:"#48b600", borderWidth:1}}
                        />
                    </FormControl>
                    ))}
                    <CustomButton bg={'#48b600'} color={'white'}>UPDATE PROFILE</CustomButton>
                </VStack>
            </ScrollView>
        </Box>
    );
}

export default Profile;