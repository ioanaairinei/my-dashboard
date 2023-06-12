import { CarouselItemProps } from './carousel';
import chevronUrl from '../../assets/images/chevron.svg';

export const CarouselItem = ({ image, caption, text, isActive, handleNext, handlePrevious }: CarouselItemProps) => {
  return (
    <div className={`carousel-item-container ${isActive ? 'active' : ''}`}>
      <div className={isActive ? 'carousel-item-image' : 'carousel-item-image-inactive'}>
        {isActive && (
          <button className="left" onClick={handlePrevious}>
            <img src={chevronUrl} alt="" />
          </button>
        )}
        {image && <img src={image} alt={caption} />}
        {text && (
          <div className="carousel-item-text">
            <p>{text}</p>
          </div>
        )}
        {isActive && (
          <button className="right" onClick={handleNext}>
            <img src={chevronUrl} alt="" />
          </button>
        )}
      </div>
      {isActive && caption && <p className="caption">{caption}</p>}
    </div>
  );
};

export default CarouselItem;
