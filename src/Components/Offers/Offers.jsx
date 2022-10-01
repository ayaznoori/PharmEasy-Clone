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
} from "@chakra-ui/react";
import React from "react";
import { OffersData } from "./OffersData";
import styles from "./offers.module.css";
import { GoNote } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";

const Offers = () => {
  return (
    <div>
      <Stack
        width={"60%"}
        margin="auto"
        marginTop="32px"
        marginBottom={"40px"}
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
          boxShadow= "rgba(149, 157, 165, 0.2) 0px 3px 20px"
            borderRadius={"150px"}
            fontSize="15px"
            fontWeight={"500"}
            placeholder="Search for Medicines"
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
