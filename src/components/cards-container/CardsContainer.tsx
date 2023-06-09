import PhotoCard from '../photo-card/PhotoCard';
import './cards-container.less';
import { type ImagesKey } from '../../assets/images/paintings/Images';
import { type Photo } from '../../views/paintings/Paintings';
import React from 'react';

interface CardsContainerProps {
  onCardClick: (id: number) => void;
  photos: Photo[];
}

const CardsContainer = React.memo(({ onCardClick, photos }: CardsContainerProps) => {
  return (
    <div className="cards-container-class" id="cards-container">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          title={photo.title}
          id={photo.id}
          imgSrc={photo.img as ImagesKey}
          painter={photo.painter}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
});

export default CardsContainer;
