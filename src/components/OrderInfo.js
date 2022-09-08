import {ScrollView, Center,Box,View,Text, Heading} from 'native-base';
import React from 'react';

const OrderInfo = ({icon, title,subTitle, text, success, danger})=>{
    return (
        <Center bg={'white'} w={200} py={2} rounded={10} shadow={4} mb={2} ml={5} mr={1} px={4}>
            <Center bg={'#48b600'} w={60} h={60} rounded="full">
                {icon}
            </Center>
            <Heading bold fontSize={12} isTruncated mt={3} mb={2} color={'black'}>{title}</Heading>
            <Text fontSize={13} color={'black'}>{subTitle}</Text>
            <Text textAlign="center" italic fontSize={13} color={'black'}>{text}</Text>
            {/* status */}
            {success && (
                <Center py={2} mt={2} rounded={5} w="full" bg={'yellow'}>
                    <Text fontSize={12} color={'white'}>Paid on Jan 12 2021</Text>
                </Center>
            )}
            {danger && (
                <Center py={2} mt={2} rounded={5} w="full" bg={'danger.400'}>
                    <Text fontSize={12} color={'white'}>Not Delivered</Text>
                </Center>
            )}
        </Center>
    );
}

export default OrderInfo;