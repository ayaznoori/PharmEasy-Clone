import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { ReviewsData } from './ReviewsData'

const Reviews = () => {
  return (
    <div>
        <div style={{margin:"auto", width:"95%"}}>
            <Heading fontSize="26px" textAlign="left" marginTop="40px" marginBottom="40px">
                What Our Customers have to Say
            </Heading>
            <Stack direction="horizontal" gap="40px"
            justify="space-between" overflow="scroll" marginTop="25px" height="380px">
                {ReviewsData.map((el,i) => (
                    <Box key={i} width="344px" textAlign="left">
                        <Heading fontSize="16px" fontWeight="600">{el.name}</Heading>
                        <Heading fontSize="14px" fontWeight="400" marginTop="5px">{el.date}</Heading>
                        <Box width="344px" border="1px solid #e2fff2" borderRadius="7px" padding="24px"
                        marginTop="20px" bg="#f1fef8" height="302px">
                            <Heading color="#bfeddd">"</Heading>
                            <Heading fontSize="16px" color="#4f4d4a" fontWeight="500"
                            >{el.review}</Heading>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </div>
        <Image width="100%" cursor="pointer" 
        marginTop="50px" src="https://i.postimg.cc/HxTwb400/Screenshot-2022-07-22-at-1-14-36-AM.png"/>
    </div>
  )
}

export default Reviews