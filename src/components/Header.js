import React from "react";
import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <FiShoppingCart />
      </Link>
    </header>
  );
}

export default Header;
