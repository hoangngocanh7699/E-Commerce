import { useContext } from "react";
import "./cartItems.scss";
import { ShopContext } from "../../context/shopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeCart, getTotalCartAmount } = useContext(ShopContext);
  console.log(getTotalCartAmount())

  return (
    <>
      <div className="cart-items">
        <div className="cart-items-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <>
                <div>
                  <div className="cart-items-format cart-items-main">
                    <img className="cartion-product-icon" src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cart-items-quantity">{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className="cart-items-remove-icon" src={remove_icon} alt="" onClick={() => {removeCart(e.id)}} />
                  </div>
                  <hr />
                </div>
              </>
            )
          }
          return null
        })}
        <div className="cart-items-down">
          <div className="cart-items-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="total-item">
                <p>Subtatal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="total-item">
                <p>Shipping Free</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-items-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-items-promobox">
              <input type="text" placeholder="promo code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
