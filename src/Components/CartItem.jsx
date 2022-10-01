import React from "react";
import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={styles.cartItemsDisplay}>
        <div className={styles.leftCartSection}>
          <div className={styles.imageWrapper}>
            <img
              src="https://cdn01.pharmeasy.in/dam/products_otc/U79163/enchanteur-romantic-perfumed-body-lotion-500ml-with-aloe-vera-olive-butte-2-1655797029.jpg?dim=60x0&dpr=1.25&q=100"
              alt="cart item"
              className={styles.cartItemImage}
            />
          </div>
        </div>
        <div className={styles.rightCartSection}>
          <div className={styles.itemTitleWrapper}>
            <h1 className={styles.cartItemsTitle}>
              Enchanteur Romantic Perfumed Body Lotion, 500ml, With Aloe Vera &
              Olive Butte
            </h1>
            <div className={styles.deleteButtonWrapper}>
              <button className={styles.deleteButton}>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg"
                  alt="delete"
                  className={styles.deleteImage}
                />
              </button>
            </div>
          </div>
          <div className={styles.producerCompany}>By ENCHANTEUR</div>
          <div className={styles.itemQuantityWrapper}>
            <p className={styles.itemQuantity}>500ml Lotion in Bottle</p>
          </div>
          <div className={styles.priceAndQuantityWrapper}>
            <div className={styles.quantityWrapper}>
              <select
                name="quantity"
                className={styles.selectQuantity}
                onFocus="this.size=10"
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
                <option value="11">Qty 11</option>
                <option value="12">Qty 12</option>
                <option value="13">Qty 13</option>
                <option value="14">Qty 14</option>
                <option value="15">Qty 15</option>
                <option value="16">Qty 16</option>
                <option value="17">Qty 17</option>
                <option value="18">Qty 18</option>
                <option value="19">Qty 19</option>
                <option value="20">Qty 20</option>
              </select>
            </div>
            <div className={styles.priceWrapper}>
              <div className={styles.stirkedPriceWrapper}>
                <p className={styles.strikedPrice}>₹1450*</p>
                <p className={styles.offer}>25%</p>
              </div>
              <div className={styles.actualPrice}>₹1068.85*</div>
            </div>
          </div>
          <div className={styles.arrivalDate}>
            <span className={styles.span1}>Delivery by</span>
            <span className={styles.span2}>&nbsp;Tue 4 Oct, before 10:00 AM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
