import React, { useContext } from "react";
import { Context } from "../context/Context";
import Image from "../components/Image";
import getClass from "../utils/getClass";

function Photos() {
  const { photos } = useContext(Context);

  const photosComponent = photos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));

  return <main className="photos">{photosComponent}</main>;
}

export default Photos;
