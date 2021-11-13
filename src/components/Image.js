import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/Context";

function Image({ img, className }) {
  const { toggleFavorite, addToCart } = useContext(Context);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(prevHover => !prevHover);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
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
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart"
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
