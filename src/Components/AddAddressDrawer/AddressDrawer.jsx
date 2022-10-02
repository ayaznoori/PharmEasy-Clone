import React, { useState } from "react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Box,
  Text,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import styles from "./AddDrawer.module.css";
import {useNavigate} from 'react-router-dom'
const AddressDrawer = () => {
  const navigate=useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [address, setAddress] = useState(JSON.parse(localStorage.getItem('address'))||{});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setAddress({
      ...address, 
      [name]: value,
    })
  };
  const handleClick = () => {
    console.log(address);
    localStorage.setItem("address", JSON.stringify(address));
    window.location.reload(true);
  }

  return (
    <>
     {!address.bill?<Button
        variant="solid"
        //   className={styles.addAddressButton}
        width="354px"
        height="45px"
        backgroundColor="#10847e"
        border="1px solid #10847e"
        fontWeight="700"
        fontSize="16px"
        fontFamily='"Open Sans", sans-serif'
        marginTop="25px"
        color="white"
        _hover={{ bg: "#0c6964" }}
        onClick={onOpen}
      >
        Add Delivery Address
      </Button>:<Button
        variant="solid"
        //   className={styles.addAddressButton}
        width="354px"
        height="45px"
        backgroundColor="#10847e"
        border="1px solid #10847e"
        fontWeight="700"
        fontSize="16px"
        fontFamily='"Open Sans", sans-serif'
        marginTop="25px"
        color="white"
        _hover={{ bg: "#0c6964" }}
        onClick={()=>navigate('/payment')}
      >
       Buy Now
      </Button>}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            marginRight="436px"
            style={{
              backgroundColor: "white",
              padding: "30px",
              border: "none",
              color: "#767676",
              marginTop: "20px",
              borderRadius: "0px",
            }}
          />
          <DrawerHeader
            fontSize="33px"
            color="#4f585e"
            fontFamily='"Open Sans", sans-serif'
            fontWeight="bold"
            mt="10px"
          >
            Add New Address
          </DrawerHeader>

          <DrawerBody>
            <div className={styles.assuranceWrapper}>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/0c22e009.svg?dim=0x32&dpr=1.25&q=100"
                alt="assureimage"
              />
              <div className={styles.assureDes}>
                Items will be safely packed & Sanitized. Pay online for
                contactless delivery
              </div>
            </div>
            <Box m="30px 0 0 0">
              <Text
                mb="15px"
                fontSize="14px"
                color="#4f585e"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                Bill To<span style={{ color: "red" }}>*</span>
              </Text>
              <Input size="lg" name="bill" value={address.bill} onChange={handleChange} />
              <Text
                m="7px 0 0 10px"
                fontSize="13px"
                color="#272c2f"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                The bill will be prepared against this name
              </Text>
            </Box>

            <Box m="30px 0 0 0">
              <Text
                mb="15px"
                fontSize="14px"
                color="#4f585e"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                Mobile Number<span style={{ color: "red" }}>*</span>
              </Text>
              <Input size="lg" name="mobNumber" type="number" value={address.mobNumber} onChange={handleChange} />
              <Text
                m="7px 0 0 10px"
                fontSize="13px"
                color="#272c2f"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                For all delivery related communication
              </Text>
            </Box>

            <Box m="30px 0 0 0">
              <Text
                mb="15px"
                fontSize="14px"
                color="#4f585e"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                Building Name and Flat Number
                <span style={{ color: "red" }}>*</span>
              </Text>
              <Input size="lg" name="buildingName" value={address.buildingName} onChange={handleChange} />
            </Box>

            <Box m="30px 0 0 0">
              <Text
                mb="15px"
                fontSize="14px"
                color="#4f585e"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                Street Name<span style={{ color: "red" }}>*</span>
              </Text>
              <Input size="lg" name="streetName" value={address.streetName} onChange={handleChange} />
            </Box>

            <Box m="30px 0 0 0">
              <Text
                mb="15px"
                fontSize="14px"
                color="#4f585e"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                Pincode<span style={{ color: "red" }}>*</span>
              </Text>
              <Input size="lg" w="140px" p="0 10px" type="number" name="pincode" value={address.pincode} onChange={handleChange} />
            </Box>

            <Box m="30px 0 0 0">
              <Text
                mb="15px"
                fontSize="14px"
                color="#4f585e"
                fontFamily='"Open Sans", sans-serif'
                fontWeight="300"
                letterSpacing="0.3px"
              >
                Pincode<span style={{ color: "red" }}>*</span>
              </Text>
              <RadioGroup fontSize="12px" name="addType" value={address.addType} onChange={handleChange}>
                <Stack
                  spacing={5}
                  direction="row"
                  ml="10px"
                  mt="0px"
                  value="1"
                  mr="10px"
                  fontSize="1px"
                  color="#4f585e"
                  fontFamily='"Open Sans", sans-serif'
                  fontWeight="300"
                >
                  <Radio value="home">Home</Radio>
                  <Radio value="work">Work</Radio>
                  <Radio value="others">Others</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box m="30px 40px">
              <Button
                bg="#8897a2"
                width="320px"
                height="45px"
                color="white"
                fontWeight="700"
                fontFamily='"Open Sans", sans-serif'
                p="0 20px"
                _hover={{ bg: "gray" }}
                onClick={handleClick}
                type="submit"
              >
                SAVE
              </Button>
            </Box>

            <Stack gap="20px" style={{ marginTop: "20px" }}></Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddressDrawer;
