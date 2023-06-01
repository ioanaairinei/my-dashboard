import React, { ReactHTMLElement, useRef, useState } from 'react';
import './image-container.less';
import useIntersectionObserver from '../../utils/hooks/use-intersection-observer';
import Image, { ImageProps } from './image';

export interface ImageContainerProps extends ImageProps {
  className?: string;
}

const ImageContainer = (props: ImageContainerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <div ref={ref} className="image-container" style={{ paddingBottom: `${100}%` }} tabIndex={0}>
      {isVisible && <Image src={props.src} thumb={props.thumb} altText={props.altText} className={props.className} />}
    </div>
  );
};

export default ImageContainer;
