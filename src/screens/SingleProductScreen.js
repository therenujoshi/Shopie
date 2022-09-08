import { useNavigation } from '@react-navigation/native';
import {Box,ScrollView,Heading,Spacer,Text, Image,HStack } from 'native-base';
import {React, useState} from 'react';
import NumericInput from 'react-native-numeric-input';
import CustomButton from '../components/CustomButton';
import Rating from '../components/Rating';
import Review from '../components/Review';

const SingleProductScreen = ({route})=>{
    const [value, setValue]=useState(0);
    const navigation =useNavigation();
    const product = route.params;
    return (
        <Box safeArea flex={1} bg={'white'}>
           <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={{uri: product.image}}
                    alt="Image" w="full" h={300} resizeMOde="contain"/>
                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    {product.name}
                </Heading>
                <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                <HStack space={2} alignItems="center" my={5}>
                    {
                        product.countInStock>0 ? (
                            <NumericInput
                            value={value}
                            totalWidth={140}
                            totalHeight={30}
                            iconSize={25}
                            step={1}
                            maxValue={product.countInStock}
                            minValue={0}
                            borderColor={"grey"}
                            rounded
                            textColor={'black'}
                            iconStyle={{color:'white'}}
                            rightButtonBackgroundColor={'#48b600'}
                            leftButtonBackgroundColor={'#48b600'}
    
                        />
                        ):(<Heading bold color={'danger.500'} italic fontSize={10}>Out of Stock</Heading>)
                    }
             
             <Spacer/>
                    <Heading bold color={'black'} fontSize={19}>${product.price}</Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>{product.description}</Text>
                <CustomButton onPress={()=> navigation.navigate("Cart")}bg={'#48b600'} color={'white'} mt={10}>ADD TO CART</CustomButton>
                {/* REVIEW */}
                <Review/>
           </ScrollView>
        </Box>
    );
}

export default SingleProductScreen;