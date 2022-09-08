import {Box,Pressable,ScrollView,HStack,Text, Button} from 'native-base';
import React from 'react';

const Order = ()=>{
    return (
        <Box h="full" bg={'white'} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Paid Order */}
                <Pressable>
                    <HStack 
                        space={4}
                        justifyContent="space-between"
                    alignItems="center"
                        bg={'emerald.100'}
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={'blue.400'} isTruncated>684268273789139</Text>
                        <Text fontSize={12} bold color={'black'} isTruncated>PAID</Text>
                        <Text fontSize={11} italic color={'black'} isTruncated>Dec 12, 2022</Text>
                        <Button px={7} py={1.5} rounded={50} bg={'#48b600'}
                            _text={{
                                color:'white'
                            }}
                            _pressed={
                                {
                                    bg:"#48b600"
                                }
                            }
                        >$546</Button>
                    </HStack>
                </Pressable>
                {/* Not paid */}
                <Pressable>
                    <HStack 
                        space={4}
                        justifyContent="space-between"
                        alignItems="center"
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={'blue.400'} isTruncated>684268273789139</Text>
                        <Text fontSize={12} bold color={'black'} isTruncated>NOT PAID</Text>
                        <Text fontSize={11} italic color={'black'} isTruncated>Jan 12 2021</Text>
                        <Button px={7} py={1.5} rounded={50} bg={'danger.500'}
                            _text={{
                                color:'white'
                            }}
                            _pressed={
                                {
                                    bg:"danger.500"
                                }
                            }
                        >$46</Button>
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    );
}

export default Order;