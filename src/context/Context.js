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

  function addToCart(newItem) {
    setCart(prevCart => [...prevCart, newItem]);
  }

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
    <Context.Provider value={{ photos, toggleFavorite, addToCart }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
