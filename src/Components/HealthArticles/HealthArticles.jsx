import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { HealthArticlesData } from './HealthArticlesData'
import styles from "../DayDeals/daydeals.module.css"

const HealthArticles = () => {
  return (
    <div style={{margin:"auto", width:"95%"}}>
        <Heading fontSize="26px" textAlign="left" marginTop="50px">
        Health Articles
        </Heading>
        <p style={{fontWeight:"500",color:"#6d757c",textAlign:"left",marginTop:"5px"}}>
        Get up-to-date on our latest health updates
        </p>
        <Stack direction="horizontal" gap="20px"
        justify="space-between" overflow="auto" marginTop="25px" height="320px">
            {HealthArticlesData.map((el,i) => (
                <Box width="230px" height="280px" key={i} cursor="pointer"
                border="1px solid #e8e6e6" borderRadius="7px" 
                className={styles.img}>
                    <img style={{width:"230px", height:"173.75px",borderTopLeftRadius:"5px",
                    borderTopRightRadius:"5px"}} src={el.img} alt=''/>
                    <Box width="230px" padding="16px">
                        <p style={{fontWeight:"500",textAlign:"left",color:"#4f4d4a"}}>{el.heading}</p>
                    </Box>
                </Box>
            ))}
        </Stack>
    </div>
  )
}

export default HealthArticles