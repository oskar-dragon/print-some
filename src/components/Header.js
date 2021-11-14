import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

function Header() {
  const { cart } = useContext(Context);
  return (
    <header>
      <Link to="/">
        <h2>Print Some</h2>
      </Link>
      <Link to="/cart">
        <i
          className={`ri-shopping-cart-${
            cart.length > 0 ? "fill" : "line"
          } ri-fw ri-2x`}
        ></i>
      </Link>
    </header>
  );
}

export default Header;
