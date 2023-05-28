import PhotoCard from "../photo-card/PhotoCard";
import "./cards-container.less";
import { type ImagesKey } from "../../assets/images/paintings/Images";
import { type Photo } from "../../views/paintings/Paintings";

interface CardsContainerProps {
  onCardClick: (id: number) => void;
  photos: Photo[];
}

function CardsContainer({ onCardClick, photos }: CardsContainerProps) {
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
}

export default CardsContainer;
