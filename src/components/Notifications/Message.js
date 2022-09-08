import {View,Text, Center} from 'native-base';
import React from 'react';

const Message = ({bg, color, size, children, bold})=>{
    return (
        <Center bg={bg} p={4} rounded={5}>
            <Text color={color} bold={bold}  fontSize={size}>{children}</Text>
        </Center>
    );
}

export default Message;