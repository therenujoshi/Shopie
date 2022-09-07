import {Box, VStack,Center,Image} from 'native-base';
import React from 'react';
import CustomButton from '../components/CustomButton';

const NotVerifyScreen = ()=>{
    return (
        <Box flex={1} bg={"emerald.300"} safeAreaTop>
            <Center w="full"
                    h={250}>
                <Image 
                    source={require("../../assets/transparent-shop-logo.png")}
                    alt="logo"
                    size="lg"
                />
            </Center>
            <VStack space={6}
                    px={5}
                    alignItems="center">
                <CustomButton bg={"black"}
                        color={"white"}
                        >REGISTER
                </CustomButton>
                <CustomButton bg={"white"}
                        color={"black"}
                        >LOGIN
                </CustomButton>
            </VStack>
        </Box>
    );
}

export default NotVerifyScreen;