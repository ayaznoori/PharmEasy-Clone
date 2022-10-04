import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Text,
  Select,
} from "@chakra-ui/react";
import styles from "./product.module.css";
import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import SimilarProductSlider from "./SimilarProductSlider";
import { useParams } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

// const plusMinusButton = styled.button`
  
// `


const SingleProduct = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams()
  let ratings = Math.floor((Math.random() * 10000) + 1)
  const [showImg, setShowImg] = useState("");
  const [qty, setQty] = useState(0);
  const [precart,setprecart]=useState(JSON.parse(localStorage.getItem('cartitem'))||[])
  const [cart, setCart] = useState([])

  useEffect(() => {
     axios
      .get(`https://pharmeasy-backend.onrender.com/products/${id}`)
      .then((res) => { setShowImg(res.data[0].img1);setProduct(res.data[0])})
      setQty(precart.length);
  }, []);
  
 useEffect(()=>{
        setQty(precart.length);
 },[setprecart,qty,precart]);

  const addCartHandler = (product)=>{
    localStorage.setItem('cartitem',JSON.stringify([...precart,{...product,qty:1}]));
    setprecart([...precart,{...product,qty:1}]);
    
    }
  return (
    <Box px="40px">
      <Box marginTop="10px">
        <Flex className="content" justify="space-between">
          <div className={styles.leftInd}>
            {
              <Box>
                <Flex className="product" h="340px" justify="space-between">
                  <Flex
                    className="img"
                    w="30%"
                    direction="column"
                    justify="space-between"
                    position="relative"
                  >
                    <Flex
                      overflow="hidden"
                      h="76%"
                      border="1.5px solid #e5e5e5"
                      borderRadius="md"
                      align="center"
                      justify="center"
                      p="10px"
                      cursor="pointer"
                    >
                      <div className={styles.figure}>
                        <img className={styles.mainimage} src={showImg} alt="" />
                      </div>
                    </Flex>
                    <Flex
                      h="20%"
                      justify="space-between"
                    >
                      <Center
                        onMouseOver={() => {
                          setShowImg(product.img1);
                        }}
                        overflow="hidden"
                        className="img1"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 0.4s ease",
                          }}
                          src={product.img1}
                        />
                      </Center>
                      <Center
                        onMouseOver={() => {
                          setShowImg(product.img2);
                        }}
                        overflow="hidden"
                        className="img2"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 0.4s ease",
                          }}
                          src={product.img2}
                        />
                      </Center>
                      <Center
                        onMouseOver={() => {
                          setShowImg(product.img3);
                        }}
                        overflow="hidden"
                        className="img3"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 0.4s ease",
                          }}
                          src={product.img3}
                        />
                      </Center>
                    </Flex>
                    <IconButton
                      aria-label="Search database"
                      isRound="true"
                      position="absolute"
                      size="sm"
                      bottom="90"
                      right="2"
                      icon={<FaShareAlt color="gray" />}
                    />
                  </Flex>

                  <Box
                    className="description"
                    w="65%"
                    position="relative"
                    textAlign="left"
                    color="#4f585e"
                    py="10px"
                  >
                    <Text
                      istruncated="true"
                      fontSize="20px"
                      fontWeight="700"
                      noOfLines={1}
                      height="30px"
                    >
                      {product.name}
                    </Text>
                    <Text fontSize="14" color="#0f847e" py="6px">
                      Visit {product.storename} Store
                    </Text>
                    <Flex
                      className=" rating"
                      paddingBottom="20px"
                      w="35%"
                      justify="space-between"
                      align="center"
                    >
                      <Flex color="#ffd344" fontSize="20px" align="center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <TiStarHalfOutline fontSize="24px" />
                        <FaRegStar />
                      </Flex>
                      <Text color="#8e9ca7" fontSize="14px">
                        (1180 ratings)
                      </Text>
                    </Flex>
                    <Flex
                      className="price"
                      h="2rem"
                      align="center"
                      w="40%"
                      justify="space-between"
                    >
                      <Text fontSize="20px" fontWeight="700">
                        ₹ {product.offprice}
                      </Text>
                      <Text fontSize="14px" fontWeight="400" color="#8e9ca7">
                        MRP{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ₹ {product.price}
                        </span>{" "}
                      </Text>
                      <Flex
                        align="center"
                        justify="start"
                        px="6px"
                        color="white"
                        fontSize="11px"
                        fontWeight="600"
                        height="72%"
                        w="36%"
                        bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                      >
                        {product.offpercentage} % OFF
                      </Flex>
                    </Flex>
                    <Text fontSize="10px" color="#8e9ca7">
                      Inclusive of all taxes
                    </Text>
                    <Text py="10px" fontSize="12px">
                      Delivery by{" "}
                      <span style={{ fontWeight: "700" }}>
                        Tomorrow, before 10:00 pm
                      </span>
                    </Text>
                    <Button
                      className="addToStore"
                      position="absolute"
                      variant="#0f847e"
                      bg="#0f847e"
                      color="white"
                      fontWeight="700"
                      fontSize="16px"
                      right="4"
                      top="28"
                      height="2.8rem"
                      w="9rem"
                      // transition="all 0.4s ease"
                      placeholder="Add to Cart"
                      onClick ={()=>addCartHandler(product)}
                      // _hover={{ bg: "#0a5855", transition: "all 0.4s ease" }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Flex>
                {/* <Box textAlign="left" py="30px" color="#4f585e">
                <Text fontSize="16px" fontWeight="700" py="10px">
                  Description
                </Text>
                <Text
                  className="desc"
                  fontSize="15px"
                  fontWeight="500"
                  color="#666f75"
                >
                  Dettol is a brand of cleaning supplies and sanitiser and sterile, presented in 1932 and the producer claimed by the Anglo-Dutch organization Reckitt Benckiser. In Germany, it is sold under the name Sagrotan. Preceding 2002, some Dettol items were marked Detox. Dettol Antiseptic Liquid is a comprehensive use item utilized for security against germs that has been suggested by clinical experts and trusted by moms. Dettol Antiseptic Liquid eliminates germs from skin, shields from contaminations brought about by cuts and scratches and can likewise be utilized as a family sanitiser on home surfaces and in clothing
                </Text>
              </Box> */}

              </Box>
            }
            <SimilarProductSlider />
          </div>
          {/* Right hand side */}
          <Box className="right" w="25%" color="#4f585e" textAlign="left">
            <Box className="cartDetails" padding="10px 0">
              <Text fontSize="16" fontWeight="600" py="30px">
                {qty} Items in Cart
              </Text>
              <Link to="/cart">
                <Button
                  className="viewCart"
                  variant="#0f847e"
                  bg="#0f847e"
                  color="white"
                  fontWeight="700"
                  h="3rem"
                  fontSize="16px"
                  transition="all 0.4s ease"
                  borderRadius="md"
                  w="100%"
                  display="flex"
                  align="center"
                  _hover={{ bg: "#075854", transition: "all 0.4s ease" }}
                >
                  View Cart <BiChevronRight fontSize="25px" />
                </Button>
              </Link>
            </Box>
            <Box
              className="offers"
              marginY="50px"
              border="1px dashed pink"
              borderRadius="5px"
              p="15px"
            >
              <Flex justify="space-between" align="center" mb="10px">
                <Text fontSize="14px" fontWeight="700">
                  Offers Just for you
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="700"
                  color="#0f847e"
                  cursor="pointer"
                >
                  View All
                </Text>
              </Flex>
              <Flex
                align="center"
                fontSize="12px"
                fontWeight="600"
                gap="10px"
                mb="10px"
              >
                <Image
                  src="https://cms-contents.pharmeasy.in/offer/ea20b1fcb6c-11.jpg"
                  h={7}
                  w={7}
                />
                <Text size={10}>Get Flat Rs. 150 instant discount on HDFC Bank Cards </Text>
              </Flex>
              <Flex
                align="center"
                fontSize="12px"
                fontWeight="600"
                gap="10px"
                mb="10px"
              >
                <Image
                  src="https://cms-contents.pharmeasy.in/offer/62e13eb58a2-2.jpg"
                  h={7}
                  w={7}
                />
                <Text size={10}>
                  Healthy Heart Sale is LIVE!
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SingleProduct;
