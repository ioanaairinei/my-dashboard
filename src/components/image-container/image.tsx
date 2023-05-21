import React from "react";
import { useState } from "react";

export interface ImageProps {
  altText: string;
  src: string;
  thumb: string;
  className?: string;
}

const Image = (props: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <img
        className="image thumb"
        alt={props.altText}
        src={props.thumb}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className={`image full ${props.className}`}
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props.altText}
        src={props.src}
      />
    </>
  );
};

export default Image;
