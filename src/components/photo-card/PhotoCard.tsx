import { IMAGES, type ImagesKey } from "../../assets/images/Images";
import ImageContainer from "../image-container/image-container";
import "./photo-card.less";

export interface PhotoCardProps {
  title: string;
  id: number;
  imgSrc: ImagesKey;
  painter: string;
  onClick: (id: number) => void;
}

function PhotoCard({ id, title, imgSrc, painter, onClick }: PhotoCardProps) {
  const imageSrc: ImagesKey = imgSrc;

  return (
    <div
      id={`photo-card-${id}`}
      className="photo-card-container"
      role="button"
      tabIndex={0}
      onClick={() => {
        onClick(id);
      }}
    >
      <ImageContainer
        className="photo-card-image"
        src={IMAGES[imageSrc]}
        altText={title}
        thumb={IMAGES[imageSrc]}
      />
      <div className="middle">
        <div className="text">{`${title}\n\n${painter}`}</div>
      </div>
    </div>
  );
}

export default PhotoCard;
