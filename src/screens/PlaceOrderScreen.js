import {ScrollView, Box,View,Text, Heading} from 'native-base';
import React from 'react';
import OrderInfo from '../components/OrderInfo';
import {FontAwesome, FontAwesome5, Ionicons} from '@expo/vector-icons';
import OrderItem from '../components/OrderItem';
import PlaceOrderModel from '../components/PlaceOrderModel';

const PlaceOrderScreen = ()=>{
    return (
        <Box bg={'emerald.100'} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <OrderInfo title="CUSTOMER" subTitle="Admin user" text="admin@example.com" icon={<FontAwesome name="user" size={30} color={'white'}/>}/>
                    <OrderInfo title="SHIPPING INFO" subTitle="Shipping : Tanzania" text="Pay Method: PayPal" icon={<FontAwesome5 name="shipping-fast" size={30} color={'white'}/>}/>
                    <OrderInfo title="DELIVER TO" subTitle="Address:" text="51, Baker Street, Lincoln City, P.O Box 1268" icon={<Ionicons name="location-sharp" size={30} color={'white'}/>}/>
                </ScrollView>
            </Box>
            {/* Orderitem */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>PRODUCTS</Heading>
                <OrderItem/>
                {/* TOTAL */}
                <PlaceOrderModel/>
            </Box>
        </Box>
    );
}

export default PlaceOrderScreen;