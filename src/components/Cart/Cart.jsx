import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { Context } from "../../utils/context";

import { useState } from "react";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const handleCheckout = () => {
    // Xử lý thanh toán ở đây (ví dụ: gọi API, xử lý dữ liệu, ...)
    // Trong ví dụ này, tạm thời chỉ đặt trạng thái thanh toán thành công thành true
    setPaymentSuccess(true);
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta">RETURN TO SHOP </button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#36;{cartSubTotal}</span>
              </div>
              <div className="button">
                {!paymentSuccess ? (
                  <button className="checkout-cta" onClick={handleCheckout}>
                    Checkout
                  </button>
                ) : (
                  <p>Thanh toán thành công!</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
