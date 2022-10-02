import React from "react";
import styles from "./Payment.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Payment = () => {
  const offersArray = [
    {
      icon: "https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png",
      name: "Paytm Wallet",
      description:
        "Guaranteed Rs.30 cashback and up to Rs.300 cashback on a minimum transaction of Rs.599. Applicable once per user.",
    },
    {
      icon: "https://cdn.pharmeasy.in/payments/amazonpay_new.png",
      name: "Amazon Pay",
      description: "",
    },
    {
      icon: "https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png",
      name: "MobiKwik | ZIP (Pay Later)",
      description:
        "Guaranteed Rs.50 cashback and up to Rs.650 cashback on a minimum transaction of Rs.800. Use code MBK650 on Mobikwik. Applicable once per user.",
    },
  ];
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
                    className={el.name === "Paytm Wallet" ? styles.paytmIconn : styles.paytmIcon}
                    alt="paytmlogo"
                  />
                </div>
                <div className={styles.paytmOffersWrapper}>
                  <div className={styles.paytmOfferHeadingWrapper1}>
                    <div className={styles.paytmHeading1}>{el.name}</div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className={styles.paytmOfferHeadingWrapper2}>
                    <p className={styles.paytmOfferDescription}>
                      {el.description}
                    </p>
                  </div>
                </div>
              </div>
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


          <div className={styles.CodWrapper}>
            <img src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png" className={styles.CodImage} alt="" />
            <div className={styles.CodDetailsWrapper}>
              <div className={styles.CodFlex}>
                <p className={styles.CodHeading}>Cash on Delivery</p>
                <input type="checkbox" name="" id="" className={styles.checkBox} />
              </div>
              <p className={styles.CodDetails}>₹25 will be charged for Cash on Delivery. Switch to online payments to save on ₹25.</p>
            </div>
          </div>


        </div>
        <div className={styles.righttContainer}></div>
      </div>
    </>
  );
};

export default Payment;
