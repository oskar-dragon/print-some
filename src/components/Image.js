import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/Context";
import useHover from "../hooks/useHover";

function Image({ img, className }) {
  const { toggleFavorite, addToCart, removeFromCart, cart } =
    useContext(Context);
  const { isHovered, toggleHover } = useHover(false);

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={`${className} image-container`}
    >
      {isHovered && (
        <i
          onClick={() => toggleFavorite(img.id)}
          className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite`}
        ></i>
      )}
      {isHovered && (
        <i
          onClick={() => {
            if (cart.some(cartItem => cartItem.id === img.id)) {
              removeFromCart(img);
            } else {
              addToCart(img);
            }
          }}
          className={`ri-add-circle-${
            cart.some(cartItem => cartItem.id === img.id) ? "fill" : "line"
          } cart`}
        ></i>
      )}
      <img alt="" src={img.url} className="image-grid" />
    </div>
  );
}

Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
  className: PropTypes.string,
};

export default Image;
