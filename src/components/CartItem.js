import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/Context";
import useHover from "../hooks/useHover";

function CartItem({ cartItem }) {
  const { removeFromCart } = useContext(Context);
  const { isHovered, toggleHover } = useHover(false);

  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(cartItem)}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        className={isHovered ? `ri-delete-bin-fill` : `ri-delete-bin-line`}
      ></i>
      <img alt="" src={cartItem.url} width="130px" />
      <p>£5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
