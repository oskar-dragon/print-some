import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

import CartItem from "../components/CartItem";

function Cart() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { cart, clearCart } = useContext(Context);

  const cartItemComponents = cart.map(cartItem => (
    <CartItem key={cartItem.id} cartItem={cartItem} />
  ));

  const calculateTotal = () => {
    const total = cart.length * 5.99;

    return total.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };

  const placeOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemComponents}
      <p className="total-cost">Total: {calculateTotal()}</p>

      {cart.length > 0 && (
        <div className="order-button">
          <button onClick={placeOrder}>
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>
      )}
    </main>
  );
}

export default Cart;
