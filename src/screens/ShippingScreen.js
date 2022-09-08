import { useNavigation } from '@react-navigation/native';
import {Box,Text, Center, ScrollView,VStack, FormControl, Input} from 'native-base';
import React from 'react';
import CustomButton from '../components/CustomButton';

const ShippingInputs=[
    {
        label:"ENTER CITY",
        text : "text"
    },
    {
        label:"ENTER COUNTRY",
        text:"text"
    },
    {
        label:"ENTER POSTAL CODE",
        text:"text"
    },
    {
        label:"ENTER ADDRESS",
        text:"text"
    }

    ]

const ShippingScreen = ()=>{
    const navigation =useNavigation();
    return (
        <Box flex={1} safeAreaTop bg={'#48b600'} py={5}>
            {/* header */}
            <Center>
                <Text color={'white'} mb={4} fontSize={14} bold>DELIVERY ADDRESS</Text>
            </Center>
            {/* inputs */}
            <Box h="full" bg={'white'} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}> 
                    <VStack space={6} mt={5}>
                        {ShippingInputs.map((i, index)=>(
                            <FormControl key={index}>
                            <FormControl.Label
                                _text={
                                    {
                                        fontSize:"12px",
                                        fontWeight:"bold"
                                    }
                                }
                            >{i.label}</FormControl.Label>
                            <Input borderWidth={0.2}
                                borderColor={'#48b600'}
                                bg={'emerald.100'}    
                                py={4}
                                type={i.type}
                                color={'black'}
                                _focus={
                                    {
                                        bg:'emerald.100',
                                        borderWidth:1,
                                        borderColor:"#48b600"
                                    }
                                }
                            />
                        </FormControl>
                        ))}
                         <CustomButton onPress={()=>navigation.navigate("Checkout")} bg={'#48b600'} color={'white'}>CONTINUE</CustomButton>
              
                        
                    </VStack>
                </ScrollView>
            </Box>
            
        </Box>
    );
}

export default ShippingScreen;