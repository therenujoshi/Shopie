import React from "react";
import { HStack ,Box, Input} from "native-base";
import { Pressable } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const HomeSearch=()=>{
    const navigation = useNavigation()
    return (
       <HStack  
            space={3}
            w="full"
            px={6}
            bg={"#48b600"}
            py={4}
            alignItems="center"
            safeAreaTop
        > 
            <Input 
                placeholder="Nike, Adidas, Puma..."
                w="85%"
                bg={"white"}
                type="search"
                variant="filled"
                h={12}
                borderWidth={0}
                _focus={{
                    bg:'white',
                }}
            />
            <Pressable ml={3} onPress={()=>navigation.navigate("Cart")}>
                <FontAwesome5 
                    name="shopping-basket"
                    size={24}
                    color={"white"}
                />
                <Box    px={1} 
                        rounded="full"
                        position="absolute"
                        top={-13}
                        left={2}
                        bg={"error.500"}
                        _text={
                            {
                                color:"white",
                                fontSize:"11px"
                            }
                        }
                >
                    5
                </Box>

            </Pressable>
        </HStack>
    );
}

export default HomeSearch;