import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppSection from "./AppSection";
import styles from "./products.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import {MdKeyboardArrowRight} from "react-icons/md";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortData, setSortData] = useState([]);
  const [change, setChange] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let res = await axios.get(
        `https://pharmeasy-backend.onrender.com/products?category=${category}`
      );
      setData(res.data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleSorting = (e) => {
    const { value } = e.target;
    setChange(!change);
    if (value === "asc") {
      let asc = data.sort((a, b) => {
        return a.offprice - b.offprice;
      });
      setSortData(asc);
    } else if (value === "des") {
      let des = data.sort((a, b) => {
        return b.offprice - a.offprice;
      });
      setSortData(des);
    }
  };

  useEffect(() => {
    setData(sortData);
  }, [change]);

  

  return (
    <div>
      <div className={styles.container}>
        <div style={{marginBottom:"40px", display:"flex", alignItems:"center"}}>
          <Breadcrumb color="gray.800" separator={<MdKeyboardArrowRight fontSize={"14px"} />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" fontSize={"13px"} color="gray.800">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" fontSize={"13px"} color="gray.800">
                All Categories
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" fontSize={"13px"} color="gray.500">
                {category.toUpperCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Stack direction="horizontal" gap="50px">
          <Stack width="25%" textAlign="left">
            <Heading fontSize="26px" fontWeight="600" marginBottom="40px">
              Filter
            </Heading>
            <Heading fontSize="16px" fontWeight="700">
              Category
            </Heading>
            <Stack
              direction="horizontal"
              justify="space-between"
              align="center"
              paddingTop="15px"
              paddingBottom="25px"
            >
              <Text fontSize="14px">{category.toUpperCase()}</Text>
              <Radio type="radio" colorScheme="teal" isChecked size="lg" />
            </Stack>
            <hr />
            <Heading
              fontSize="16px"
              fontWeight="700"
              style={{ marginTop: "20px", marginBottom: "15px" }}
            >
              Brand
            </Heading>
            <InputGroup>
              <InputRightElement
                color={"gray.400"}
                children={<HiOutlineSearch fontSize={"24px"} />}
              />
              <Input
                marginBottom={"30px"}
                type="text"
                colorScheme="teal"
                placeholder="Search"
              />
            </InputGroup>
            <hr />
            <Heading
              fontSize="16px"
              fontWeight="700"
              style={{ marginTop: "20px" }}
            >
              Price
            </Heading>
            <Stack
              direction="horizontal"
              justify="space-between"
              align="center"
              paddingTop="15px"
              paddingBottom="15px"
            >
              <Text fontSize="14px" fontWeight={"500"}>
                Below 99
              </Text>
              <Checkbox colorScheme="teal" size="lg" />
            </Stack>
            <Stack
              direction="horizontal"
              justify="space-between"
              align="center"
              paddingBottom="15px"
            >
              <Text fontSize="14px" fontWeight={"500"}>
                100 - 199
              </Text>
              <Checkbox colorScheme="teal" size="lg" />
            </Stack>
            <Stack
              direction="horizontal"
              justify="space-between"
              align="center"
              paddingBottom="15px"
            >
              <Text fontSize="14px" fontWeight={"500"}>
                200 - 299
              </Text>
              <Checkbox colorScheme="teal" size="lg" />
            </Stack>
            <Stack
              direction="horizontal"
              justify="space-between"
              align="center"
              paddingBottom="15px"
            >
              <Text fontSize="14px" fontWeight={"500"}>
                300 - 399
              </Text>
              <Checkbox colorScheme="teal" size="lg" />
            </Stack>
            <Stack
              direction="horizontal"
              justify="space-between"
              align="center"
              paddingBottom="15px"
            >
              <Text fontSize="14px" fontWeight={"500"}>
                400 - 499
              </Text>
              <Checkbox colorScheme="teal" size="lg" />
            </Stack>
          </Stack>
          <Stack width="75%">
            <Stack
              direction="horizontal"
              marginBottom="40px"
              justify="space-between"
              align="center"
            >
              <Heading fontSize="26px" fontWeight="600">
                {category.toUpperCase()}
              </Heading>
              <Stack direction="horizontal" gap="40px" align="center">
                <Text fontSize="14px" width="60px">
                  Sort By:
                </Text>
                <Select width="248px" height="39px" onChange={handleSorting}>
                  <option value="">Select</option>
                  <option value="asc">Price Low to High</option>
                  <option value="des">Price High to Low</option>
                </Select>
              </Stack>
            </Stack>
            {loading ? (
              <Box
                width="100%"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  width="150px"
                  src="https://media0.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47536zmw7vnywwf4ll75fj0otdkp05q4dzjop9597f&rid=giphy.gif&ct=g"
                />
              </Box>
            ) : (
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {data.map((item) => (
                  <Link to={`/product/${item._id}`}>
                  <Box
                    key={item._id}
                    height="330px"
                    width="230px"
                    padding="10px"
                    border="1px solid #e1e1e1"
                    borderRadius="7px"
                    position="relative"
                  >
                    <Box
                      padding="20px"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Image src={item.img1} height={"150px"} />
                    </Box>
                    <Heading
                      marginTop="20px"
                      fontSize="16px"
                      fontWeight="700"
                      noOfLines={2}
                    >
                      {item.name}
                    </Heading>
                    <Flex
                      gap={"10px"}
                      position="absolute"
                      bottom="40px"
                      alignItems={"center"}
                    >
                      <Heading
                        fontSize="13px"
                        fontWeight="500"
                        textDecoration={"line-through"}
                        color="#8897A2"
                      >
                        {`MRP ₹${item.price}`}
                      </Heading>
                      <div className={styles.discount}>
                        {`${item.offpercentage}% off`}
                      </div>
                    </Flex>
                    <Heading
                      fontSize="17px"
                      fontWeight="600"
                      position="absolute"
                      bottom="20px"
                    >
                      {`₹ ${item.offprice}`}
                    </Heading>
                  </Box>
                  </Link>
                ))}
              </Grid>
            )}
          </Stack>
        </Stack>
      </div>
      <hr className={styles.hr} />
      <Box width="60%" marginLeft="15%">
        <Image
          src="https://i.postimg.cc/4xLJD6Cb/Screenshot-2022-07-23-at-1-02-22-PM.png"
          height="70px"
          margin="auto"
          width="67%"
        />
        <Stack
          direction="horizontal"
          justify="space-between"
          gap="50px"
          textAlign="left"
          width="85%"
          margin="auto"
          marginLeft="160px"
          marginTop="30px"
        >
          <Stack width="30%">
            <Heading fontSize="16px" fontWeight="700" color="gray.600">
              1 Lakh+ Products
            </Heading>
            <Text fontSize="16px" fontWeight="400" color="gray.500">
              We maintain strict quality controls on all our partner retailers,
              so that you always get standard quality products.
            </Text>
          </Stack>
          <Stack width="32%">
            <Heading fontSize="16px" fontWeight="700" color="gray.600">
              Secure Payment
            </Heading>
            <Text fontSize="16px" fontWeight="400" color="gray.500">
              100% secure and trusted payment protection
            </Text>
          </Stack>
          <Stack width="36%">
            <Heading fontSize="16px" fontWeight="700" color="gray.600">
              Easy Return
            </Heading>
            <Text fontSize="16px" fontWeight="400" color="gray.500">
              We have a new and dynamic return window policy for medicines and
              healthcare items. Refer FAQs section for more details.
            </Text>
          </Stack>
        </Stack>
      </Box>
      <hr className={styles.hr} />
      <AppSection />
    </div>
  );
};

export default Products;
