import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./CartSwiper.css";
import { Button } from '@chakra-ui/react'

const CartSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">10% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperImage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">Neurobion Forte Tablet 30's.</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">30 Tablet(s) in strip</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹38.15</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹30.23</p>
          </div>
          <div className="addButtonWrapper">
            <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">12% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperimage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">Evion 400mg Strip Of 10 Capsules</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">10 Capsules(s) in Strip</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹35.15</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹31.23</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">15% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/226830/prega-news-pregnancy-test-kit-1-1641787797.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperimage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">Prega News Pregnancy Test Kit</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">1 Kit(s) in Packet</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹55.15</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹46.23</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">14% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1654077435.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperimage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">Accu-chek Active Glucometer Strips</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">50 Test Strips(s)</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹1049.15</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹902.13</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">24% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperimage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">Dr Morepen Gluco Glucometer Strips</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">50 Test Strips(s)</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹849.00</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹645.25</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">13% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-2-1654166928.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperImage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">
              Accu-chek Instant Glucometer
            </p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">50 Test Strips(s)</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹1049.00</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹912.63</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">19% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/I40164/durex-extra-dots-packet-of-10-condoms-3-1654166124.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperImage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">
              Durex Extra Dots Condoms
            </p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">10 Condom(s) in Box</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹245.00</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹198.45</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">12% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/156565/saridon-headache-relief-tablet-strip-of-10-tablets-2-1641398741.jpg?dim=100x0&dpr=1.25&q=100"
              alt="swiperimage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">Saridon Headache Relief Tablet</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">10 Tablet(s) in Strip</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹45.30</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹37.22</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">20% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/269298/cetaphil-moisturising-lotion-sensitive-and-dry-skin-250ml-2-1654077647.jpg?dim=240x0&dpr=1.25&q=100"
              alt="swiperimage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">Cetaphil Moisturise Lotion</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">250ml Lotion in Bottle</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹965.00</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹772.00</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapper">
            <div className="offerDisplayWrapper">15% OFF</div>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/264359/d-protin-chocolate-diabetes-care-powder-500-g-2-1654077913.jpg?dim=100x0&dpr=1.25&q=100"
              alt="Swiperimage"
              className="SwiperProductImage"
            />
          </div>
          <div className="CartItemTitleWrapper">
            <p className="CartItemTitle">D-Protin Chocolate..</p>
          </div>
          <div className="ItemDesWrapper">
            <p className="ItemDesTitle">500g Powder in Bottle</p>
          </div>
          <div className="strikedMRPWraper">
            <p className="strikedMRP">
              MRP <span className="strikedMRPSpan">₹595.00</span>
            </p>
          </div>
          <div className="actualMRPWrapper">
            <p className="actualMRP">₹505.86</p>
          </div>
          <div className="addButtonWrapper">
          <Button colorScheme='teal' variant='outline' className="AddButton"
              fontSize= "16px"
              mt="8px"
              fontFamily= '"Open Sans", sans-serif'
              fontWeight= "bold"
              width= "120px"
              height= "45px"
              padding= "0 20px"
            >
              Add
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CartSwiper;
