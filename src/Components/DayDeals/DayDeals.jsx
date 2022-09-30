import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { DayDealsData } from './DayDealsData'
import styles from "./daydeals.module.css"

const DayDeals = () => {
  return (
    <div style={{margin:"auto", width:"95%", textAlign:"left", marginTop:"50px"}}>
        <Stack direction="horizontal" gap="30px" alignItems="center">
            <Heading fontSize="26px">
                Deals of the Day
            </Heading>
            <Heading fontSize="14px" bg="#f2923e" color="white" padding="7px 15px" borderRadius="5px">
                13:41 MINS LEFT, HURRY!
            </Heading>
        </Stack>
        <Stack direction="horizontal" gap="20px" marginTop="30px"
        justify="space-between" overflow="auto" height="325px">
            {DayDealsData.map((el,i) => (
                <Box key={i}>
                    <Box className={styles.img} padding="24px 16px" width="184px" 
                    height="192px" border="1px solid #f5f5f5" borderRadius="10px" 
                    style={{display:"flex", alignItems:"center"}}>
                        <Image style={{borderRadius:"5px",cursor:"pointer"}} src={el.img}/>
                    </Box>
                    <Heading fontSize="15px" marginTop="12px" fontWeight="600">
                        {el.heading}
                    </Heading>
                    <Stack direction="horizontal" gap="7px" alignItems="center" marginTop="10px">
                        <Heading fontSize="12px" fontWeight="500" color="#6d757c">
                            MRP 
                        </Heading>
                        <Heading fontSize="14px" fontWeight="500" 
                        textDecoration="line-through" color="#6d757c">
                            {el.oldprice}
                        </Heading>
                    </Stack>
                    <Stack direction="horizontal" gap="12px" alignItems="center" marginTop="10px"
                    height="30px">
                        <Heading fontSize="16px" fontWeight="600">
                            {el.newprice} 
                        </Heading>
                        <Heading fontSize="14px" color="#ef7779" fontWeight="800">
                            {el.off}
                        </Heading>
                    </Stack>
                </Box>
            ))}
        </Stack>
    </div>
  )
}

export default DayDeals