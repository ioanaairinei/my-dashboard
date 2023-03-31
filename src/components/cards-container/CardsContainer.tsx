import PhotoCard, { PhotoCardProps } from "../photo-card/PhotoCard";
import './cards-container.less';
import { ImagesKey } from "../../assets/images/Images";
import { Photo } from "../../views/Paintings";

interface CardsContainerProps  {
    onCardClick: (id: number) => void;
    photos: Photo[];
}

const CardsContainer = ({onCardClick, photos}: CardsContainerProps) => {

    return (
        <div className="cards-container-class">
            {photos.map(photo => <PhotoCard 
                key={photo.id} 
                title={photo.title} 
                id={photo.id} 
                imgSrc={photo.img as ImagesKey}
                painter={photo.painter}
                onClick={onCardClick}
                />)}
        </div>
    )
}

export default CardsContainer;