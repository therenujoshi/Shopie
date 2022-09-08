import {View,Text, FlatList,Box,HStack, Pressable, Center, Image, VStack, Button} from 'native-base';
import React from 'react';
import Products from '../data/Products';

const OrderItem = ()=>{
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={Products.slice(0,3)}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <Pressable>
                    <Box mb={3}>
                        <HStack alignItems="center"
                            bg={'white'}
                            shadow={1}
                            rounded={10}
                            overflow="hidden"
                        >
                            <Center w="25%" bg={'white'}>
                                <Image source={{uri:item.image}} alt={item.name} w="full" h={24} resizeMode="contain"/>

                            </Center>
                            <VStack w="60%" px={2}>
                                <Text isTruncated color={'black'} bold fontSize={13}>
                                    {item.name}
                                </Text>
                                <Text  color={'darkslategrey'} mt={2} bold >
                                    ${item.price}
                                </Text>
                            </VStack>
                            <Center>
                                <Button bg={'#48b600'} _pressed={{bg:"#48b600"}} _text={{
                                    color:"white"
                                }}>
                                    5
                                </Button>
                            </Center>
                        </HStack>
                    </Box>
                </Pressable>
            )}
        />
    );
}

export default OrderItem;