import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { OffersData } from './OffersData'
import styles from "./offers.module.css"

const Offers = () => {
  return (
    <div className={styles.container}>
        <Stack direction="horizontal" justify="space-between" width="95%" margin="auto">
            {OffersData.map((item,i) => (
                <Box key={i} className={styles.box}>
                    <img src={item.img} alt="" />
                    <h5 className={styles.heading}>{item.heading}</h5>
                    <h6 className={styles.discount}>{item.discount}</h6>
                </Box>
            ))}

        </Stack>
    </div>
  )
}

export default Offers