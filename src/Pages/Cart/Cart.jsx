import React from "react";
import CartItem from "../../Components/CartItem";
import styles from "./cart.module.css";
import CartSwiper from "../../Components/CartSwiper.jsx";
import Button from "@mui/material/Button";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import { HiCurrencyRupee } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Cart = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.cartItemsWrapper}>
            <h1 className={styles.cartItemsNumber}>2 Items in cart</h1>
            <p className={styles.priceDes}>Prices are indicative</p>
          </div>
          <CartItem />    
          {/* //map here */}
          <div className={styles.swiperWrapper}>
            <div className={styles.trendingProductsWrapper}>
              <p className={styles.trendingTitle}>Trending Products Near You</p>
            </div>
            <CartSwiper />
          </div>
          <div className={styles.additionalNotesWrapper}>
            <div className={styles.notesInputWrapper}>
              <p className={styles.notesTitle}>Additional Notes</p>
              <input
                type="text"
                className={styles.inputBox}
                placeholder="Enter any additional information regarding your order"
              />
            </div>
            <ul className={styles.notesul}>
              <li className={styles.notesli}>
                A licensed pharmacy would be delivering your order basis
                availability of product & fastest delivery.{" "}
                <a href="#" className={styles.anchorTag}>
                  Details
                </a>{" "}
              </li>
              <li className={styles.notesli}>
                Prices are indicative and may change after billing
              </li>
              <li className={styles.notesli}>
                PharmEasy is a technology platform to connect sellers and buyers
                and is not involved in sales of any product. Offer for sale on
                the products and services are provided/sold by the sellers only.
                For detail read{" "}
                <a
                  href="https://pharmeasy.in/legal/terms-and-conditions"
                  className={styles.anchorTag}
                >
                  Terms and Conditions
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.offersSection}>
            <Button
              variant="outlined"
              className={styles.applyCouponButton}
              endIcon={<ChevronRight />}
              sx={{
                width: "354px",
                height: "45px",
                color: "#10847e",
                border: "1px solid #10847e",
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              Apply Coupon / View Offers
            </Button>
            <Button
              variant="contained"
              className={styles.addAddressButton}
              sx={{
                width: "354px",
                height: "45px",
                backgroundColor: "#10847e",
                border: "1px solid #10847e",
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: '"Open Sans", sans-serif',
                marginTop: "25px",
              }}
            >
              Add Delivery Address
            </Button>
            <Box
              variant="outlined"
              className={styles.addAddressButton}
              sx={{
                width: "354px",
                color: "#3bb896",
                height: "45px",
                border: "2px dotted #3bb896",
                fontWeight: "700",
                fontSize: "15px",
                fontFamily: '"Open Sans", sans-serif',
                margin: "25px auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span>
                <img
                  src="https://cdn.pharmeasy.in/cms/delivery_image.png"
                  alt="delivery"
                  width="20px"
                  height="20px"
                />
              </span>
              Free delivery with cart value above ₹1500.
            </Box>
          </div>
          <div className={styles.orderSummaryWrapper}>
            <div className={styles.orderSummaryHeading}>Order Summary</div>
            <div className={styles.orderDetailsWrapper}>
              <div className={styles.cartValueWrapper}>
                <p className={styles.CartValue}>Cart Value</p>
                <p className={styles.CartValue}>
                  <span className={styles.orderStrikedPrice}>₹950.00 </span>{" "}
                  ₹712.55
                </p>
              </div>
              <div className={styles.deliveryChargesWrapper}>
                <p className={styles.deliveryCharges}>Delivery Charges</p>
                <p className={styles.deliveryCharges}>₹49.00</p>
              </div>
              <div className={styles.convenienceWrapper}>
                <p className={styles.convenienceCharges}>Convenience charges</p>
                <p className={styles.convenienceCharges}>
                  <span className={styles.orderStrikedPrice}>₹39.00 </span>₹0.00
                </p>
              </div>
              <hr className={styles.seperator} />
              <div className={styles.toBePaidWrapper}>
                <p className={styles.toBePaid}>Amount to be paid</p>
                <p className={styles.toBePaid}>₹761.50</p>
              </div>
              <hr className={styles.seperator} />
            </div>
            <div className={styles.savingsWrapper}>
              <div className={styles.savingTitle}>
                <span className={styles.currencySpan}>
                  <HiCurrencyRupee />
                </span>{" "}
                Total savings of <b>₹276.50</b> on this order
                <span className={styles.uparrowSpan}>
                  <MdKeyboardArrowUp />
                </span>
              </div>
              <div className={styles.MRPDiscountWrapper}>
                <p className={styles.MRPDiscount}>MRP Discount 25.00%</p>
                <p className={styles.MRPDiscount}>₹235.50</p>
              </div>
              <div className={styles.otherChargesWrapper}>
                <p className={styles.MRPDiscount}>Other Charges Waiver</p>
                <p className={styles.MRPDiscount}>₹39.50</p>
              </div>
            </div>
          </div>
          <div className={styles.saveOfferWrapper}>
            <div className={styles.saveheading}>
              <div>Save ₹49.00 more on this order</div>
              <div>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/f1f4bdf9.svg"
                  alt="offer"
                />
              </div>
            </div>
            <div className={styles.offerDescriptionWrapper}>
              <ul className={styles.offerDescriptionUl}>
                <li className={styles.offerDescription}>
                  5% cashback on all allopathic medicine orders
                </li>
                <li className={styles.offerDescription}>
                  40% cashback on all diagnostics orders
                </li>
                <li className={styles.offerDescription}>
                  FREE delivery on orders
                </li>
                <li className={styles.offerDescription}>
                  ZERO convenience charge
                </li>
              </ul>
            </div>
            <div className={styles.moreBenefits}>
              View More Benefits <MdOutlineKeyboardArrowRight fontSize="20px" />
            </div>
          </div>
          <div className={styles.assuranceWrapper}>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/0c22e009.svg?dim=0x32&dpr=1.25&q=100"
              alt="image"
            />
            <div className={styles.assureDes}>
              Products will be safely packed & Sanitized. Pay online for
              contactless delivery
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.seperator} />
      <div className={styles.DeliveryPolicies}>
        <div className={styles.policy1}>
          <div className={styles.iconwrapper}>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/9ac2da37.svg?dim=0x72&dpr=1.25&q=100"
              alt=""
              className={styles.iconImage}
            />
          </div>
          <div className={styles.totalProducts}>1 Lakh+ Products</div>
          <div className={styles.description}>
            <p>
              We maintain strict quality controls on all our partner retailers,
              so that you always get standard quality products.
            </p>
          </div>
        </div>
        <div className={styles.policy2}>
          <div className={styles.iconwrapper}>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/2f258fe0.svg?dim=0x72&dpr=1.25&q=100"
              alt=""
              className={styles.iconImage}
            />
          </div>
          <div className={styles.totalProducts}>Secure Payment</div>
          <div className={styles.description}>
            <p>100% secure and trusted payment protection.</p>
          </div>
        </div>
        <div className={styles.policy3}>
          <div className={styles.iconwrapper}>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/256fe591.svg?dim=0x72&dpr=1.25&q=100"
              alt=""
              className={styles.iconImage}
            />
          </div>
          <div className={styles.totalProducts}>Easy Return</div>
          <div className={styles.description}>
            <p>
              We have a new and dynamic return window policy for medicines and
              healthcare items. Refer FAQs section for more details.
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.seperator} />
      <div className={styles.appPromotionWrapper}>
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/34a16ae8.jpg"
          alt="mobileImage"
          className={styles.mobileImage}
        />
        <div className={styles.downloadWrapper}>
          <div className={styles.downloadTitle}>Download the App For Free</div>
          <div className={styles.AppDownloadButtonWrapper}>
            <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer" target="_blank">
              <button className={styles.googlePlayButton}>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/3380aedc.png"
                  alt="googlePlay"
                />
                <span>Google Play</span>
              </button>
            </a>
            <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643" target="_blank">
              <button className={styles.appleStoreButton}>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/9bf5c576.png"
                  alt="appleStore"
                />
                <span>Apple Store</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
