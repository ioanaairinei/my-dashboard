import { KeyboardEventHandler } from 'react';
import { IMAGES, IMAGES_THUMBS, type ImagesKey } from '../../assets/images/paintings/Images';
import ImageContainer from '../image-container/image-container';
import './photo-card.less';

export interface PhotoCardProps {
  title: string;
  id: number;
  imgSrc: ImagesKey;
  painter: string;
  onClick: (id: number) => void;
}

function PhotoCard({ id, title, imgSrc, painter, onClick }: PhotoCardProps) {
  const imageSrc: ImagesKey = imgSrc;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClick(id);
    }
  };

  return (
    <div
      id={`photo-card-${id}`}
      className="photo-card-container"
      role="button"
      onClick={() => {
        onClick(id);
      }}
      onKeyDown={(event) => handleKeyDown(event)}
    >
      <ImageContainer
        className="photo-card-image"
        src={IMAGES[imageSrc]}
        altText={title}
        thumb={IMAGES_THUMBS[imageSrc]}
      />
      <div className="middle">
        <div className="text">{`${title}\n\n${painter}`}</div>
      </div>
    </div>
  );
}

export default PhotoCard;
