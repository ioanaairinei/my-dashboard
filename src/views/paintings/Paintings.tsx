import { useState } from "react";
import { type ImagesKey } from "../../assets/images/Images";
import CardsContainer from "../../components/cards-container/CardsContainer";
import DetailsView from "../../components/details-view/DetailsView";
import photos from "../../data/photos.json";
import "./paintings.less";

export interface Photo {
  id: number;
  title: string;
  painter: string;
  location: string;
  locationUrl: string;
  img: string;
}

function Paintings() {
  const [activePainting, setActivePainting] = useState<Photo>();

  const onClickPhotoCard = (id: number) => {
    const activePhoto = photos.find((photo) => photo.id === id);
    setActivePainting(activePhoto);
  };

  const onCloseDetailedView = () => {
    setActivePainting(undefined);
  };

  return (
    <div className="paintings-container">
      {activePainting == null ? (
        <CardsContainer onCardClick={onClickPhotoCard} photos={photos} />
      ) : (
        <DetailsView
          title={activePainting.title}
          author={activePainting.painter}
          img={activePainting.img as ImagesKey}
          location={activePainting.location}
          locationUrl={activePainting.locationUrl}
          onClose={onCloseDetailedView}
        />
      )}
    </div>
  );
}

export default Paintings;
