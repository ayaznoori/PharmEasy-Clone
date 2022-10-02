import React, { useState } from "react";
import styles from "./Payment.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HiCurrencyRupee } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const offersArray = [
    {
      id: 1,
      icon: "https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png",
      name: "Paytm Wallet",
      description:
        "Guaranteed Rs.30 cashback and up to Rs.300 cashback on a minimum transaction of Rs.599. Applicable once per user.",
    },
    {
      id: 2,
      icon: "https://cdn.pharmeasy.in/payments/amazonpay_new.png",
      name: "Amazon Pay",
      description: "",
    },
    {
      id: 3,
      icon: "https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png",
      name: "MobiKwik | ZIP (Pay Later)",
      description:
        "Guaranteed Rs.50 cashback and up to Rs.650 cashback on a minimum transaction of Rs.800. Use code MBK650 on Mobikwik. Applicable once per user.",
    },
  ];

  const [check, setCheck] = useState(false);
  const [checked, setChecked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Navigate = useNavigate()

  

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setCheck(!check);
    }
  };

  const handleRadioChange = (e) => {
    // console.log(e.target.checked);
    setChecked(!checked);
  };

  const handlebuy=()=>{
      onOpen();
      setTimeout(() => {
        onClose();
        localStorage.removeItem("cartvalue");
        localStorage.removeItem("cartitem");
        Navigate("/")
      }, 5000)
  }


  let prices = JSON.parse(localStorage.getItem("cartvalue"));

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.offerTitleWrapper}>
            <h1 className={styles.offerTitle}>Offers</h1>
          </div>
          {offersArray.map((el) => (
            <>
              <div className={styles.paytmContainer}>
                <div className={styles.paytmIconWrapper}>
                  <img
                    src={el.icon}
                    className={
                      el.name === "Paytm Wallet"
                        ? styles.paytmIconn
                        : styles.paytmIcon
                    }
                    alt="paytmlogo"
                  />
                </div>
                <div className={styles.paytmOffersWrapper}>
                  <div className={styles.paytmOfferHeadingWrapper1}>
                    <div className={styles.paytmHeading1}>{el.name}</div>
                    <input
                      type="radio"
                      value={el.id}
                      name={el.id}
                      id={el.id}
                      onChange={handleRadioChange}
                    />
                  </div>
                  <div className={styles.paytmOfferHeadingWrapper2}>
                    <p className={styles.paytmOfferDescription}>
                      {el.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* {checked ? <Button colorScheme="teal" display="flex" justify="flex-start" ml="40px" p="14px 16px">Place Order</Button> : null} */}
              <hr className={styles.offerSeperator} />
            </>
          ))}
          <h2 className={styles.otherPaymentOptions}>Other Options</h2>
          <div className={styles.upiPaymentWrapper}>
            <img
              src="https://cdn.pharmeasy.in/payments/upi.png"
              alt="logo"
              className={styles.upiImage}
            />
            <div className={styles.ImageWrapper}>
              <div className={styles.upiHeadingWrapper}>
                <p>UPI</p>
                <MdOutlineKeyboardArrowRight fontSize="33px" color="#4f585e" />
              </div>
              <div className={styles.imageCollectionWrapper}>
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/kotakUpi.png"
                  alt="logo"
                />
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonUpi.png"
                  alt="logo"
                />
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png"
                  alt="logo"
                />
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png"
                  alt="logo"
                />
                <span className={styles.morespan}>and more</span>
              </div>
              {/* <hr className={styles.offerSeperator} /> */}
            </div>
          </div>

          {/* ***********8 */}

          <div className={styles.upiPaymentWrapper}>
            <img
              src="https://cdn.pharmeasy.in/payments/wallet.png"
              alt="logo"
              className={styles.upiImage}
            />
            <div className={styles.ImageWrapper}>
              <div className={styles.upiHeadingWrapper}>
                <p>Wallets</p>
                <MdOutlineKeyboardArrowRight fontSize="33px" color="#4f585e" />
              </div>
              <div className={styles.imageCollectionWrapper}>
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png"
                  alt="logo"
                />
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/paytm.png"
                  alt="logo"
                />
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/freecharge-wallet.png"
                  alt="logo"
                />
                <img
                  className={styles.imageCollection}
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png"
                  alt="logo"
                />
              </div>
              {/* <hr className={styles.offerSeperator} /> */}
            </div>
          </div>

          <div className={styles.cartDetailsWrapper}>
            <img
              src="https://cdn.pharmeasy.in/payments/card.png"
              alt="logo"
              className={styles.creditCardImage}
            />
            <div className={styles.cardWrapper}>
              <div className={styles.upiHeadingWrapper}>
                <p>Credit/Debit Card</p>
                <MdOutlineKeyboardArrowRight fontSize="33px" color="#4f585e" />
              </div>
              <div className={styles.detailsWrapper}>
                <p>
                  Flat Rs.200 savings on Citi Cards, Min. transaction of
                  Rs.2000. Applicable once per user <br />
                  Flat Rs.150 off on HDFC Bank Cards, Min. transaction of
                  Rs.1500. Applicable once per user
                </p>
              </div>
              <div className={styles.CreditimageWrapper}>
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png"
                  className={styles.creditImage}
                  alt="creditlogo"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png"
                  className={styles.creditImage}
                  alt="creditlogo"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png"
                  className={styles.creditImage}
                  alt="creditlogo"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png"
                  className={styles.creditImage}
                  alt="creditlogo"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png"
                  className={styles.creditImage}
                  alt="creditlogo"
                />
              </div>
            </div>
          </div>
          <br />
          <hr className={styles.offerSeperator} />

          <div className={styles.netBankingWrapper}>
            <img
              src="https://cdn.pharmeasy.in/payments/netbanking.png"
              alt="netbankinglogo"
              className={styles.netbankingImage}
            />
            <div className={styles.netbankingDetailsWrapper}>
              <div className={styles.netbankingFlex}>
                <p className={styles.bankHeading}>Net Banking</p>
                <MdOutlineKeyboardArrowRight fontSize="33px" color="#4f585e" />
              </div>
              <p className={styles.banksCount}>We support over 100 banks</p>
            </div>
          </div>
          <hr className={styles.offerSeperator} />
          {/* ** */}

          <div>
            <div className={styles.CodWrapper}>
              <img
                src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png"
                className={styles.CodImage}
                alt=""
              />
              <div className={styles.CodDetailsWrapper}>
                <div className={styles.CodFlex}>
                  <p className={styles.CodHeading}>Cash on Delivery</p>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name=""
                    id=""
                    className={styles.checkBox}
                  />
                </div>
                <p className={styles.CodDetails}>
                  ₹25 will be charged for Cash on Delivery. Switch to online
                  payments to save on ₹25.
                </p>
              </div>
            </div>
            {check ? (
              <>
                <Button
                  colorScheme="teal"
                  display="flex"
                  justify="flex-start"
                  ml="40px"
                  p="14px 16px"
                  onClick={handlebuy}

                >
                  Place Order
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent bg="#f0ffff" w="400px" h="450px">
                    <ModalHeader
                      textAlign="center"
                      fontSize="24px"
                      fontFamily='"Open Sans", sans-serif'
                      fontWeight="600"
                    >
                      Your Order is Confirmed
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <GiConfirmed fontSize="200px" color="green" mb="20px" />
                    </ModalBody>
                    <Text
                      textAlign="center"
                      fontSize="20px"
                      fontFamily='"Open Sans", sans-serif'
                      fontWeight="600"
                      mb="50px"
                    >
                      {" "}
                      Order ID : {Math.floor(Math.random() * 100000) + 1111111}
                    </Text>
                  </ModalContent>
                </Modal>
              </>
            ) : null}
          </div>
        </div>

        <div className={styles.righttContainer}>
          <div className={styles.priceDetailsWrapper}>
            <Text
              fontSize="16px"
              color="#8897a2"
              fontWeight="bold"
              fontFamily='"Open Sans", sans-serif'
              textAlign="left"
            >
              Price Breakdown
            </Text>
            <Flex w="360px" h="28px" m="10px 0" justify="space-between">
              <Box
                fontSize="16px"
                color="#4f585e"
                fontWeight="500"
                fontFamily='"Open Sans", sans-serif'
              >
                Cart Value
              </Box>
              <Flex gap="10px">
                <Text
                  textDecoration="line-through"
                  fontSize="16px"
                  color="#8897a2"
                  fontWeight="400"
                  fontFamily='"Open Sans", sans-serif'
                >
                  ₹{prices.sprice}
                </Text>
                <Text
                  fontSize="16px"
                  color="#4f585e"
                  fontWeight="500"
                  fontFamily='"Open Sans", sans-serif'
                >
                  ₹{prices.price}
                </Text>
              </Flex>
            </Flex>

            <Flex w="360px" h="28px" m="10px 0" justify="space-between">
              <Box
                fontSize="16px"
                color="#4f585e"
                fontWeight="500"
                fontFamily='"Open Sans", sans-serif'
              >
                Delivery Charges
              </Box>
              <Flex gap="10px">
                <Text
                  textDecoration="line-through"
                  fontSize="16px"
                  color="#8897a2"
                  fontWeight="400"
                  fontFamily='"Open Sans", sans-serif'
                >
                  ₹99.00
                </Text>
                <Text
                  fontSize="16px"
                  color="#4f585e"
                  fontWeight="500"
                  fontFamily='"Open Sans", sans-serif'
                >
                  ₹49.00
                </Text>
              </Flex>
            </Flex>

            <Flex w="360px" h="28px" m="10px 0" justify="space-between">
              <Box
                fontSize="16px"
                color="#4f585e"
                fontWeight="500"
                fontFamily='"Open Sans", sans-serif'
              >
                Packing Charges
              </Box>
              <Flex gap="10px">
                <Text
                  textDecoration="line-through"
                  fontSize="16px"
                  color="#8897a2"
                  fontWeight="400"
                  fontFamily='"Open Sans", sans-serif'
                >
                  ₹10.00
                </Text>
                <Text
                  fontSize="16px"
                  color="#4f585e"
                  fontWeight="500"
                  fontFamily='"Open Sans", sans-serif'
                >
                  ₹0.00
                </Text>
              </Flex>
            </Flex>

            <hr className={styles.lineBreaker} />
            <Flex w="360px" h="28px" m="10px 0" justify="space-between">
              <Box
                fontSize="16px"
                color="#4f585e"
                fontWeight="500"
                fontFamily='"Open Sans", sans-serif'
              >
                Amount to Be Paid
              </Box>
              <Flex gap="10px">
                <Text
                  fontSize="16px"
                  color="#4f585e"
                  fontWeight="500"
                  fontFamily='"Open Sans", sans-serif'
                >
                  ₹{Number(prices.price) + 49}
                </Text>
              </Flex>
            </Flex>
            <hr className={styles.lineBreaker} />
          </div>
          <div className={styles.savingsWrapper}>
            <HiCurrencyRupee fontSize="23px" color="rgb(255, 197, 1)" />
            <Box
              fontSize="16px"
              color="#3bb896"
              fontWeight="400"
              fontFamily='"Open Sans", sans-serif'
            >
              Total saving of <span className={styles.savingSpan}>₹82.00 </span>
              on this order
            </Box>
            <MdOutlineKeyboardArrowDown fontSize="26px" color="#3bb896" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
