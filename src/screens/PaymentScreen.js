import {Box,Text, Center,Image, ScrollView,VStack, FormControl, Input, HStack, Spacer} from 'native-base';
import React from 'react';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const paymentMethods=[
    {
        image:require("../../assets/paypal.png"),
        alt : "paypal",
        icon:"Ionicons"
    },
    {
        image:require("../../assets/discover.png"),
        alt : "discover",
        icon:"fontAwesome"
    },
    {
        image:require("../../assets/googlepay.png"),
        alt : "googlepay",
        icon:"fontAwesome"
    },
 

    ]
    ;
const PaymentScreen = ()=>{
    const navigation = useNavigation();
    return (
        <Box flex={1} safeAreaTop bg={'#48b600'} py={5}>
            {/* header */}
            <Center>
                <Text color={'white'} mb={4} fontSize={14} bold>PAYMENT MODE</Text>
            </Center>
            {/* selection */}
            <Box h="full" bg={'emerald.100'} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}> 
                    <VStack space={6} mt={5}>
                        {paymentMethods.map((i, index)=>(
                            <HStack alignItems="center"
                            bg={'white'}
                            px={3}
                            py={1}
                            justifyContent="space-between"
                            rounded={10}
                            >
                            <Box>
                            <Image source={i.image}
                                    alt={i.alt}
                                    resizeMode='contain'
                                    w={60}
                                    h={50}
                            />

                            </Box>
                            {i.icon==="Ionicons"?     
                                <Ionicons name="checkmark-circle" size={30} color={'darkblue'}/> 
                                :
                                <FontAwesome name="circle-thin" size={30} color={'darkblue'}/> 
                            }
                        
                            </HStack>
                        ))}
                       
                         <CustomButton bg={'#48b600'} color={'white'} onPress={()=>navigation.navigate("Placeorder")}>CONTINUE</CustomButton>
                        <Text italic textAlign="center">Payment method is <Text bold>Paypal
                            </Text> by default</Text>
                        
                    </VStack>
                </ScrollView>
            </Box>
            
        </Box>
    );
}

export default PaymentScreen;