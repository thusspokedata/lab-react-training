import React from 'react';
import { useState } from 'react';

export const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(true);
  function handleClick() {
    setImage(!image);
  }

  return (
    <img
      onClick={handleClick}
      src={image ? img : imgClicked}
      height="200px"
      alt="that guy"
    />
  );
};
