import {Box ,Text, HStack, Button,Center, Image, VStack} from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import Products from '../data/Products';

const Swiper=()=>
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={Products.slice(0,2)}
        renderItem={renderItems}
        renderHiddenItem={renderHiddenItems} 
        showsVerticalScrollIndicator={false} 
    />
;

// cart items
const renderItems=(data)=>(
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems="center" bg={'white'} shadow={1} rounded={10} overflow="hidden">
               <Center w="25%" bg={'grey'}>
                <Image source={{uri:data.item.image}}
                        alt={data.item.name}
                        w="full"
                        h={24}
                        resizeMode="contain"/>

               </Center>
               <VStack w="60%" px={2} space={2}>
                <Text isTruncated color={'black'} bold fontSize={12}>{data.item.name}</Text>
                <Text bold color={'black'}> ${data.item.price}</Text>
               </VStack>
               <Center>
                 <Button bg={'#48b600'} _pressed={{bg:'#48b600'}} _text={{color:'white'}}>5</Button>
               </Center>
            </HStack>
        </Box>
    </Pressable>
);


// hidden
const renderHiddenItems=()=>(
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h="88%" ml="auto" justifyContent="center" bg={'#48b600'}>
        <Center alignItems="flex-end" top={10} space={2}>
           <FontAwesome name="trash" size={24}  color={'red'}/>
        </Center>
    </Pressable>
);


const CartItems = ()=>{
    return (
        <Box mr={6}>
            <Swiper/>
        </Box >
    );
}

export default CartItems;