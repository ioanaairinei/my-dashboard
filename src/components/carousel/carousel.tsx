import { useCallback, useEffect, useRef, useState } from 'react';
import CarouselItem from './carousel-item';
import './carousel.less';

interface CarouselProps {
  data: CarouselItemData[];
}

interface CarouselItemData {
  id: number;
  image?: string;
  text?: string;
  caption?: string;
}

export interface CarouselItemProps {
  image?: string;
  text?: string;
  caption?: string;
  isActive: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Carousel = ({ data }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  let activeIndexes = useRef<number[]>([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === 0) {
      activeIndexes.current = [data.length - 1, 0, 1];
    } else if (activeIndex === data.length - 1) {
      activeIndexes.current = [data.length - 2, data.length - 1, 0];
    } else {
      activeIndexes.current = [activeIndex - 1, activeIndex, activeIndex + 1];
    }
  }, [activeIndex]);

  let handleNext = useCallback(() => {
    if (activeIndex == data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevState) => prevState + 1);
    }
  }, [activeIndex]);

  let handlePrevious = useCallback(() => {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex((prevState) => prevState - 1);
    }
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      {activeIndexes.current.map((itemIndex: number, index) => (
        <CarouselItem
          key={data[itemIndex].id}
          image={data[itemIndex].image}
          text={data[itemIndex].text}
          caption={data[itemIndex].caption}
          isActive={index === 1}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ))}
    </div>
  );
};

export default Carousel;
