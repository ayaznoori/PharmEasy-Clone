import React, {useEffect, useState} from "react";
import { Box, Flex, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import SimilarProduct from "./SimilarProduct";
import axios from "axios"


// Slider settings
const settings = {
    dots: false,
    arrows: true,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
};

const  SimilarProductSlider = () => {
    const [slider, setSlider] = React.useState();
    const [productData, setProductData] = useState([])

    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "10px" });

    
useEffect(()=>{
    axios
    .get("https://pharmeasy-backend.onrender.com/products/")
    .then((res)=> setProductData(res.data))
},[])


    return (
        <Flex h="450px" justify="center" marginY="20px" direction="column" py="40px" color="#4f585e" borderTop="1.5px solid #e6e8ee" borderBottom="1.5px solid #d8dee3">
            <Text fontSize="18px" fontWeight="700" textAlign="left">Similar Products</Text>
            <Box
                position={"relative"}
                height={"380px"}
                width={"full"}
                overflow={"hidden"}
                borderRadius="0"
                zIndex="0"
            >
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <IconButton
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={"translate(0%, -50%)"}
                    zIndex={2}
                    bg="white"
                    boxShadow=" rgba(136, 165, 191, 0.58) 6px 2px 15px 0px, rgba(255, 255, 255, 2.8) -2px -0px 16px 0px"
                    _hover={{
                        bg: "white",
                        transform: "scale(1.1) translateY(-15px)",
                    }}
                    _active={{ bg: "white" }}
                    size="sm"
                    onClick={() => slider?.slickPrev()}
                >
                    <BiLeftArrowAlt color="#0f847e" />
                </IconButton>
                <IconButton
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={"translate(0%, -50%)"}
                    zIndex={2}
                    size="sm"
                    boxShadow=" rgba(136, 165, 191, 0.58) 6px 2px 15px 0px, rgba(255, 255, 255, 2.8) -2px -0px 16px 0px"
                    _hover={{
                        bg: "white",
                        transform: "scale(1.1) translateY(-15px)",
                    }}
                    _active={{ bg: "white" }}
                    bg="white"
                    onClick={() => slider?.slickNext()}
                >
                    <BiRightArrowAlt color="#0f847e" />
                </IconButton>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {productData.map((prod, index) => (
                        <SimilarProduct prod={prod}  key={prod._id} />
                    ))}
                </Slider>
            </Box>
        </Flex>
    );
}

export default SimilarProductSlider
