import { useState } from "react";
import { ImagesKey } from "../assets/images/Images";
import CardsContainer from "../components/cards-container/CardsContainer";
import DetailsView from "../components/details-view/DetailsView";
import photos from '../data/photos.json';
import './paintings.less';

export interface Photo {
    id: number;
    title: string;
    painter: string;
    location: string;
    locationUrl: string;
    img: string;
  }


const Paintings = () => {
    const [activePainting, setActivePainting] = useState<Photo>();

    const onClickPhotoCard = (id: number) => {
      const activePhoto = photos.find(photo => photo.id === id);
      console.log({activePhoto});
      setActivePainting(activePhoto);
    }

    const onCloseDetailedView = () => {
        setActivePainting(undefined);
    }
  
    return (
      <div className="paintings-container">
          {!activePainting ? <CardsContainer onCardClick={onClickPhotoCard} photos={photos}/> : 
            <DetailsView 
                title={activePainting.title} 
                author={activePainting.painter} 
                img={activePainting.img as ImagesKey}
                location={activePainting.location}
                locationUrl={activePainting.locationUrl}
                onClose={onCloseDetailedView}/>}
      </div>
    )
}

export default Paintings;