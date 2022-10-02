import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { Button } from "@chakra-ui/react";

const CartItem = ({ data, setdata }) => {
  const handleclick = (id) => {
    let data = JSON.parse(localStorage.getItem("cartitem"));
    let finaldata = data.filter((ele) => {
      if (ele._id != id) return ele;
    });
    localStorage.setItem("cartitem", JSON.stringify(finaldata));
    setdata(finaldata);
  };
useEffect(()=>{

},[])

function updateqty(id,value) {
  let data = JSON.parse(localStorage.getItem("cartitem"));
  let finaldata = data.map((ele) => {
    if (ele._id == id) return { ...ele, qty: Number(value) };
    else {
      return ele;
    }
  });
  localStorage.setItem("cartitem", JSON.stringify(finaldata));
  setdata(finaldata);
}
  

  return (
    <>
      <div className={styles.cartItemsDisplay}>
        <div className={styles.leftCartSection}>
          <div className={styles.imageWrapper}>
            <img
              src={data.img1}
              alt="cart item"
              className={styles.cartItemImage}
            />
          </div>
        </div>
        <div className={styles.rightCartSection}>
          <div className={styles.itemTitleWrapper}>
            <h1 className={styles.cartItemsTitle}>{data.name}</h1>
            <div className={styles.deleteButtonWrapper}>
              <button
                className={styles.deleteButton}
                onClick={() => handleclick(data._id)}
              >
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg"
                  alt="delete"
                  className={styles.deleteImage}
                />
              </button>
            </div>
          </div>
          <div className={styles.producerCompany}>By {data.storename}</div>
          <div className={styles.itemQuantityWrapper}>
            <p className={styles.itemQuantity}></p>
          </div>
          <div className={styles.priceAndQuantityWrapper}>
            <div className={styles.quantityWrapper}>
              <select
                name="quantity"
                className={styles.selectQuantity}
                // eslint-disable-next-line no-undef
                onChange={(e) => {
                  updateqty(data._id,e.target.value);
                }}
              >
                <option value="1">Qty 1</option>
                <option value="2">Qty 2</option>
                <option value="3">Qty 3</option>
                <option value="4">Qty 4</option>
                <option value="5">Qty 5</option>
                <option value="6">Qty 6</option>
                <option value="7">Qty 7</option>
                <option value="8">Qty 8</option>
                <option value="9">Qty 9</option>
                <option value="10">Qty 10</option>
              </select>
            </div>
            <div className={styles.priceWrapper}>
              <div className={styles.stirkedPriceWrapper}>
                <p className={styles.strikedPrice}>₹{data.price}*</p>
                <p className={styles.offer}>{data.offpercentage}%</p>
              </div>
              <div className={styles.actualPrice}>₹{data.offprice}*</div>
            </div>
          </div>
          <div className={styles.arrivalDate}>
            <span className={styles.span1}>Delivery by</span>
            <span className={styles.span2}>
              &nbsp;Tue 4 Oct, before 10:00 AM
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
