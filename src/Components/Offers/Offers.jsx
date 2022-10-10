import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { OffersData } from "./OffersData";
import styles from "./offers.module.css";
import { GoNote } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

const Offers = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = async (e) => {
    if (e.target.value === "") {
      return setShow(false);
    }
    setQuery(e.target.value);
    setShow(true);
    let res = await axios.get(
      `https://pharmeasy-backend.onrender.com/products?name=${e.target.value}`
    );
    setData(res.data);
  };

  const element = document.querySelector("#box");
  console.log(element);

  // if()
  return (
    <div>
      <div className={styles.backColor}>
        <Stack
          width={"60%"}
          margin="auto"
          paddingTop="32px"
          // marginBottom={"40px"}
          gap="15px"
        >
          <Flex justifyContent={"space-between"}>
            <Heading fontSize={"22px"}>What are you looking for?</Heading>
            <Flex alignItems={"center"} gap="10px">
              <GoNote fontSize={"24px"} />
              <Text fontSize={"14px"} fontWeight="500">
                Order with prescription.
              </Text>
              <Text fontSize={"14px"} fontWeight="700" color={"#10847E"}>
                UPLOAD NOW
              </Text>
              <MdKeyboardArrowRight fontSize={"20px"} color={"#10847E"} />
            </Flex>
          </Flex>
          <InputGroup size="lg" alignItems={"center"}>
            <InputLeftElement
              children={<BiSearchAlt color="#9B929B" fontSize={"24px"} />}
            />
            <Input
              boxShadow="rgba(149, 157, 165, 0.2) 0px 3px 20px"
              borderRadius={"150px"}
              fontSize="15px"
              fontWeight={"500"}
              placeholder="Search for Medicines"
              onChange={handleChange}
              focusBorderColor="#EEF4FF"
              border={"1px solid #EEF4FF"}
            />
            <InputRightElement
              width={"100px"}
              children={
                <Button borderRadius={"50px"} colorScheme={"teal"} width="88px">
                  Search
                </Button>
              }
            />
          </InputGroup>
        </Stack>
      </div>
      {show ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            zIndex: "1000",
            backgroundColor: "white",
            // border:"1px solid #EEF4FF"
          }}
        >
          <Box
            position={"absolute"}
            height={"425px"}
            border="1px solid #EEF4FF"
            width={"60%"}
            margin="auto"
            bg={"white"}
            marginLeft="290px"
            overflowY="scroll"
            borderTop={"none"}
            id="#box"
          >
            <VStack>
              <Box
                paddingLeft={"10px"}
                width={"100%"}
                backgroundColor="#EEF4FF"
                textAlign={"left"}
                fontSize="12px"
                height={"40px"}
                display="flex"
                alignItems="center"
                color="#4F585E"
              >
                Showing results for {query}
              </Box>
              {data.map((el) => (
                <div
                  key={el._id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    textAlign: "left",
                    paddingLeft: "10px",
                  }}
                >
                  <Link to={`/product/${el._id}`}>
                    <Heading
                      noOfLines={"1"}
                      color="#30363C"
                      fontSize="14px"
                      fontWeight={"500"}
                      height="20px"
                    >
                      {el.name}
                    </Heading>
                    <Text color={"#6E787E"} fontSize={"12px"}>
                      {el.storename}
                    </Text>
                  </Link>
                </div>
              ))}
            </VStack>
          </Box>
        </div>
      ) : null}
      <div className={styles.container}>
        <Stack
          direction="horizontal"
          justify="space-between"
          width="95%"
          margin="auto"
        >
          {OffersData.map((item, i) => (
            <Box key={i} className={styles.box}>
              <img src={item.img} alt="" />
              <h5 className={styles.heading}>{item.heading}</h5>
              <h6 className={styles.discount}>{item.discount}</h6>
            </Box>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Offers;
