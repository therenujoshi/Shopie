import { useNavigation } from '@react-navigation/native';
import {Box,Text,Button,HStack, VStack, Center, ScrollView} from 'native-base';
import React from 'react';
import CartEmpty from '../components/CartEmpty';
import CartItems from '../components/CartItems';
import CustomButton from '../components/CustomButton';

const CartScreen = ()=>{
    const navigation=useNavigation();
    return (
        <Box flex={1} safeAreaTop bg={'emerald.200'}>
           {/* header */}
           <Center w="full" py={5}>
                <Text color={'black'} fontSize={20} bold>Cart</Text>
           </Center>
           {/* IF CART IS EMPTY
            <CartEmpty/> */}
            {/* CART ITEMS */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItems/>
                {/* buttons */}
                <Center mt={5}>
                    <HStack rounded={50}
                        justifyContent="space-between"
                        bg={'white'}
                        shadow={2}
                        w="90%"
                        pl={5}
                        h={45}
                        alignItems="center">
                    <Text>Total</Text>
                    <Button px={10} h={45} rounded={50} bg={'#48b600'}
                     _text={{
                        color:'white',
                        fontWeight:'semibold'
                     }}
                     _pressed={{bg:'#48b600'}}>$356</Button>
                    </HStack>
                </Center>
                {/* checkout */}
                <Center px={5}>
                    <CustomButton onPress={()=>navigation.navigate("Shipping")} bg={"black"} color={'white'} mt={10}>CHECKOUT</CustomButton>

                </Center>
            </ScrollView>
        </Box>
    );
}

export default CartScreen;