import {Box,Text, Center} from 'native-base';
import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import CustomButton from './CustomButton';

const CartEmpty = ()=>{
    return (
        <Box flex={1} px={4}>
          <Center h="90%">
            <Center w={200} h={200} bg={'white'} rounded="full">
                 <FontAwesome name="shopping-basket" size={64} color={'#48b600'}/>
            </Center>
            <Text color={'#48b600'} bold mt={5}>CART IS EMPTY</Text>

          </Center>
          <CustomButton bg={'black'} color={'white'}>Start Shopping</CustomButton>
        </Box>
    );
};

export default CartEmpty;