import React, { useRef, useState } from "react";
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
  Image,
  Stack,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [email, setEmail] = useState({ email: "" });
  const [show, setShow] = useState(true);
  const [otp, setOtp] = useState("");
  const [hello, setHello] = useState("Hello, Log in")

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleClick = async () => {
    // console.log(email)
    if (email.email === "") {
      setShow(true);
    } else {
      setShow(false);
    }
    let res = await axios.post("http://localhost:8080/sendOtp", email);
    console.log(res);
  };

  const handleOTP = (value) => {
    setOtp(+value);
  };

  const Signup = async () => {
    let res = await axios.post("http://localhost:8080/verify", {
      email: email.email,
      otp: otp,
    });
    if ((res.data.msg = "Verified Successfully")) {
      console.log(res);
      let signup = await axios.post("http://localhost:8080/signup", {
        email: email.email,
        otp: otp,
      });
      console.log(signup);
      setHello("Hello User");
      onClose();
      setShow(true);
    }
  };
  return (
    <div>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        variant="ghost"
        color="black"
        _hover="none"
        fontWeight="500"
        width="100px"
        fontSize={"14px"}
      >
        {hello}
      </Button>
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
              backgroundColor: "#10847E",
              padding: "30px",
              border: "none",
              color: "white",
              marginTop: "20px",
              borderRadius: "0px",
            }}
          />
          <Image src="https://i.postimg.cc/x1dpN9GZ/Screenshot-2022-07-21-at-7-20-12-PM.png" />
          {show ? (
            <div>
              <DrawerHeader fontSize="16px" fontWeight="700">
                Quick Login / Register
              </DrawerHeader>

              <DrawerBody>
                <Stack gap="10px">
                  <Input
                    borderRadius="8px"
                    height="50px"
                    borderColor="#767676"
                    _hover="none"
                    type={"text"}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                    name="email"
                  />
                  <Button
                    height="50px"
                    bg="#37857e"
                    color="white"
                    fontWeight="700"
                    fontSize="15px"
                    _hover="none"
                    onClick={handleClick}
                  >
                    Send OTP
                  </Button>
                  <p style={{ fontSize: "13px" }}>
                    By clicking continue, you agree with our
                    <span style={{ color: "#37857e", fontWeight: "600" }}>
                      {" "}
                      Privacy Policy
                    </span>
                  </p>
                </Stack>
              </DrawerBody>
            </div>
          ) : (
            <div>
              <DrawerHeader fontSize="16px" fontWeight="700">
                Enter OTP sent to {email.email}
              </DrawerHeader>

              <DrawerBody>
                <Stack gap="10px">
                  {/* <Input
                    borderRadius="8px"
                    height="50px"
                    borderColor="#767676"
                    _hover="none"
                    type={"text"}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                    name="email"
                  /> */}
                  <HStack justifyContent={"space-between"}>
                    <PinInput
                      type="alphanumeric"
                      size={"lg"}
                      name="otp"
                      onChange={(value) => handleOTP(value)}
                      mask
                    >
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                  <Button
                    height="50px"
                    bg="#37857e"
                    color="white"
                    fontWeight="700"
                    fontSize="15px"
                    _hover="none"
                    onClick={Signup}
                  >
                    Continue
                  </Button>
                  <p style={{ fontSize: "13px" }}>
                    By clicking continue, you agree with our
                    <span style={{ color: "#37857e", fontWeight: "600" }}>
                      {" "}
                      Privacy Policy
                    </span>
                  </p>
                </Stack>
              </DrawerBody>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Login;
