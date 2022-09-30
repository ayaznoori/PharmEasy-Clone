import React from "react";
import { Box, Flex, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import SimilarProduct from "./SimilarProduct";

const products = [
    {
        id: 1,
        name: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
        storename: "DETTOL",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1654166172.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-3-1654166156.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.1-1652772850.jpg",
        offprice: 180,
        price: 194,
        offpercentage: 7
    },
    {
        id: 2,
        name: "Savlon Surface Disinfectant Spray 170g",
        storename: "SAVLON",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/O26428/savlon-surface-disinfectant-spray-170g-2-1654234199.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/O26428/savlon-surface-disinfectant-spray-170g-6.1-1641788812.jpg?dim=100x0&dpr=1&q=100",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/O26428/savlon-surface-disinfectant-spray-170g-6.2-1641788809.jpg?dim=100x0&dpr=1&q=100",
        offprice: 133.65,
        price: 165,
        offpercentage: 19
    },
    {
        id: 3,
        name: "Pharmeasy All-In -One Vaporizer",
        storename: "PHARMEASY",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-2-1654233960.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-3-1654233960.jpg",
        offprice: 269.55,
        price: 599,
        offpercentage: 55
    },
    {
        id: 4,
        name: "Bpl Smart Oxy Finger Tip Pulse Black Oximeter (Black)",
        storename: "BPL",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/M67325/bpl-smart-oxy-finger-tip-pulse-black-oximeter-black-2-1654234561.jpg",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/M67325/bpl-smart-oxy-finger-tip-pulse-black-oximeter-black-3-1654234561.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/M67325/bpl-smart-oxy-finger-tip-pulse-black-oximeter-black-6.1-1641788519.jpg",
        offprice: 1080,
        price: 3600,
        offpercentage: 70
    },
    {
        id: 5,
        name: "Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        storename: "EVERHERB",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1654234192.jpg",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1654234192.jpg?dim=320x320&dpr=1&q=100",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-6.1-1653130502.jpg",
        offprice: 539,
        price: 599,
        offpercentage: 10
    },
    {
        id: 6,
        name: "Revital H Men Multivitamin With Calcium, Zinc & Ginseng For Immunity, Strong Bones & Energy (30 Capsules)",
        storename: "REVITAL",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-3-1654078581.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-health-supplement-capsules-bottle-of-30-6.2-1641398805.jpg",
        offprice: 263,
        price: 310,
        offpercentage: 15,
    },
    {
        id: 7,
        name: "Liveasy Wellness Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        storename: "LIVEASY",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/E79162/liveasy-wellness-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1654169626.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/E79162/liveasy-wellness-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-3-1654169510.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/E79162/liveasy-wellness-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-6.1-1654169476.jpg",
        offprice: 629,
        price: 699,
        offpercentage: 10
    },
    {
        id: 8,
        name: "Liveasy Wellness Vitamin C (990mg) With Zinc (10mg) - Powerful Immunity Booster - 60 Veg Tablets",
        storename: "LIVEASY",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1654169544.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-3-1654169499.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-6.1-1654169553.jpg",
        offprice: 719,
        price: 799,
        offpercentage: 10
    },
    {
        id: 9,
        name: "Vicks Vaporub 25ml, Relief From Cold, Cough, Headache And Body Pain",
        storename: "VICKS",
        img1: "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1654078746.jpg?dim=320x320&dpr=1&q=100",
        img2: "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-3-1654078533.jpg",
        img3: "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-6.1-1641399019.jpg",
        offprice: 78,
        price: 85,
        offpercentage: 8,
    },
]
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

    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "10px" });



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
                    {products.map((prod, index) => (
                        <SimilarProduct prod={prod} key={prod.id} />
                    ))}
                </Slider>
            </Box>
        </Flex>
    );
}

export default SimilarProductSlider
