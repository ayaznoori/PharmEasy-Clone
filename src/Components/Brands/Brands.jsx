import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { BrandsData } from './BrandsData'

const Brands = () => {
  return (
    <div style={{margin:"auto", width:"95%"}}>
        <Heading fontSize="26px" textAlign="left" marginTop="60px">
        Featured Brands
        </Heading>
        <p style={{fontWeight:"500",color:"#6d757c",textAlign:"left",marginTop:"5px"}}>
            Pick from our favourite brands
        </p>
        <Stack direction="horizontal" gap="30px"
        justify="space-between" overflow="scroll" marginTop="25px">
            {BrandsData.map((el,i) => (
                <Box key={i} width="180px" height="212px">
                    <img style={{borderRadius:"5px",width:"180px", height:"172px",cursor:"pointer"}} src={el.img}
                    alt=''/>
                    <Box width="180px">
                        <p style={{fontWeight:"500"}}>{el.heading}</p>
                    </Box>
                </Box>
            ))}
        </Stack>
    </div>
  )
}

export default Brands