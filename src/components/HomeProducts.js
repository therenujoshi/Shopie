import React from "react";
import { ScrollView,Image, Flex, Heading, Text, Box } from "native-base";
import Products from "../data/Products";
import { Pressable } from "react-native";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

const HomeProduct=()=>{
    const navigation = useNavigation();
    return (
       <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex
                flexWrap="wrap"
                direction="row"
                justifyContent="space-between"
                px={6}
            >
                { Products.map((Product)=>(
                        <Pressable
                            onPress={()=>navigation.navigate('Single', Product)}
                            key={Product.id}
                            w="47%"
                            bg={"white"}
                            rounded="md"
                            shadow={2}
                            pt={0.3}
                            my={3}
                            pb={2}
                            overflow="hidden"
                        >
                            <Image 
                                source = {{uri:Product.image}}
                                alt={Product.name}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ${Product.price}
                                </Heading>
                                <Text fontSize={10} mt={1} isTruncated w="full">{Product.name}</Text>
                                  {/* rating */}
                                <Rating value={Product.rating} />
                            </Box>
                           
                        </Pressable>
                    ))
                }
            </Flex>

       </ScrollView>
    );
}

export default HomeProduct;