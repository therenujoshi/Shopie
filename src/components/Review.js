import {Box,Heading,Text, CheckIcon,TextArea, FormControl, Select, VStack} from 'native-base';
import Rating from './Rating';
import {React, useState} from 'react';
import Message from './Notifications/Message';
import CustomButton from './CustomButton';

const Review = ()=>{
    const [rating, setRating]=useState('');
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* If there is no review */}
            {/* <Message bg={'emerald.100'} color={'#48b600'} size={11} 
                   bold children={'NO REVIEW'}/> */}

            {/* review */}
            <Box p={3} bg={'emerald.300'} mt={5} rounded={5} >
                <Heading fontSize={15} color={'black'}>
                    John Doe
                </Heading>
                <Rating value={4}/>
                <Text my={2} fontSize={11}>Jan 12, 2022</Text>
                <Message color={'black'} bg={'white'} size={12} children={'If you need to customize the default theme to match your design requirements, you can extend the theme from native-base.'}/>

            </Box>
            {/* write review */}
            {/* <Box mt={6}>
                <Heading fontSize={15} bold mb={4}>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={4}>
                  <FormControl>
                    <FormControl.Label _text={
                        {fontSize:"12px", fontWeight:"bold"}
                    }>
                        Rating
                    </FormControl.Label>
                    <Select bg={'emerald.100'} borderWidth={0} rounded={5} py={4} placeholder="Choose Rating"
                    _selectedItem={{
                        bg: "emerald.100",
                        endIcon:<CheckIcon size={3}/>
                    }}
                    selectedValue={rating}
                    onValueChange={(e)=>setRating(e)}>
                        <Select.Item label='1 - Poor' value="1"/>
                        <Select.Item label='2 - Fair' value="2"/>
                        <Select.Item label='3 - Good' value="3"/>
                    </Select>
                 </FormControl>
                 <FormControl>
                    <FormControl.Label _text={
                        {fontSize:"12px", fontWeight:"bold"}
                    }>
                        Comment
                    </FormControl.Label>
                    <TextArea h={24} w="full" placeholder="This product is awesome...." 
                        borderWidth={0}
                        bg={'emerald.100'}
                        py={4} _focus={{
                            bg:'emerald.100'
                        }
                        }/>
                </FormControl>
                <CustomButton bg={"#48b600"} color={'white'}>SUBMIT</CustomButton>
                {/* if not logged in */}
                {/* <Message bg={'black'} color={'white'}
                   bold children={'Please "Login" to write a review'}/>
                </VStack>
            </Box>  */}
        </Box>
    );
}

export default Review;