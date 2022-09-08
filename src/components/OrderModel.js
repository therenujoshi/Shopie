import { useNavigation } from '@react-navigation/native';
import {View,Text, Center, Image,Modal, VStack, HStack, Button, Pressable} from 'native-base';
import React, { useState } from 'react';
import CustomButton from './CustomButton';

const OrdersInfos=[
    {
        title:"Products",
        price:125.77,
        color:"black"
    },
    {
        title:"Shipping",
        price:34.09,
        color:"black"
    },
    {
        title:"Tax",
        price:23.42,
        color:"black"
    },
    {
        title:"Total Amount",
        price:250.77,
        color:"#48b600"
    },

];

const OrderModel = ()=>{
const navigation = useNavigation();
    const [showModel, setShowModel]=useState(false);

    return (
       <Center>
        <CustomButton onPress={()=>setShowModel(true)}
            bg={'black'}
            color={'white'}
            mt={5}
        >
            SHOW PAYMENT & TOTAL
        </CustomButton>
        <Modal isOpen={showModel} onClose={()=>setShowModel(false)} size="lg">
            <Modal.Content maxWidth={350}>
                <Modal.CloseButton/>
                <Modal.Header>Order</Modal.Header>
                <Modal.Body>
                    <VStack space={7}>
                        {OrdersInfos.map((i,index)=>(
                            <HStack alignItems="center" justifyContent="space-between">
                            <Text fontWeight="medium">
                                {i.title}
                            </Text>
                            <Text color={i.color==='#48b600' ? '#48b600':"black"} bold>
                               ${i.price}
                            </Text>
                        </HStack>
                        ))}
                        
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                    <Pressable w="full" justifyContent="center" bg={"blue"} h={45} rounded={3} overflow="hidden" onPress={
                        ()=>setShowModel(false)
                    }>
                        <Image source={require("../../assets/paypal.png")} alt="paypal" resizeMode="contain" w="full" h={34}/>
                    </Pressable>
                    <Button w="full" mt={4} bg={'black'} h={45} _text={{
                        color:"white"
                    }}
                        onPress={()=>{navigation.navigate("Home"), setShowModel(false);}}
                        _pressed={
                            {
                                bg:"black"
                            }
                        }
                    >
                        PAY LATER
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>

       </Center>
    );
}

export default OrderModel;