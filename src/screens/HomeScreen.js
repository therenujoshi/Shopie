import {Box, Text} from 'native-base';
import React from 'react';
import HomeProduct from '../components/HomeProducts';
import HomeSearch from '../components/HomeSearch';

const HomeScreen = ()=>{
    return (
        <Box flex={1}
            bg={'emerald.200'} safeAreaTop>
            <HomeSearch/>
            <HomeProduct/>
        </Box>
    );
}

export default HomeScreen;