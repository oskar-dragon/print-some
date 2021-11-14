import { useState } from "react";

function useHover(defaultValue = false) {
  const [isHovered, setIsHovered] = useState(defaultValue);

  const toggleHover = () => {
    setIsHovered(prevHover => !prevHover);
  };

  return { isHovered, toggleHover };
}

export default useHover;
