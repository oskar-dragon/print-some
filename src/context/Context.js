import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      const data = await res.json();

      setPhotos(data);
    };

    fetchData();
  }, []);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = item => {
    const newArr = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(newArr);
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = id => {
    const updatedArr = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setPhotos(updatedArr);
  };

  return (
    <Context.Provider
      value={{
        photos,
        cart,
        toggleFavorite,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
