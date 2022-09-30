import { Button, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {FaGooglePlay,FaApple} from "react-icons/fa"

const AppSection = () => {
  return (
    <Stack direction="horizontal" gap="130px" marginLeft="17%" paddingTop="30px" marginBottom="-25px">
        <Image width="210px" src='https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg'/>
        <Stack gap="30px" marginTop="10px">
            <Text fontSize="19px" textAlign="left" color="gray.600">Download the App for Free</Text>
            <Stack direction="horizontal" gap="20px">
                <a 
                href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
                target="_blank" rel='noreferrer'>
                    <Button leftIcon={<FaGooglePlay style={{width:"25px",height:"30px"}}/>} 
                    bg="#586166" fontSize="12px" color="white" width="175px" height="56px"
                    style={{display:"flex",justifyContent:"left"}} _hover={{bg:"#3e4346"}}>
                        Google Play
                    </Button>
                </a>
                <a 
                href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
                target="_blank" rel='noreferrer'>
                    <Button leftIcon={<FaApple style={{width:"25px",height:"30px"}}/>} 
                    bg="#586166" fontSize="12px" color="white" width="175px" height="56px"
                    style={{display:"flex",justifyContent:"left"}} _hover={{bg:"#3e4346"}}>
                        App Store
                    </Button>
                </a>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default AppSection