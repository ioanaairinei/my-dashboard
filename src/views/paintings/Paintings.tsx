import { useCallback, useState } from 'react';
import { type ImagesKey } from '../../assets/images/paintings/Images';
import CardsContainer from '../../components/cards-container/CardsContainer';
import DetailsView from '../../components/details-view/details-view';
import photos from '../../data/photos.json';
import './paintings.less';

export interface Photo {
  id: number;
  title: string;
  painter: string;
  location: string;
  locationUrl: string;
  img: string;
  description?: string;
}

function Paintings() {
  const [activePainting, setActivePainting] = useState<Photo>();

  const onClickPhotoCard = useCallback((id: number) => {
    const activePhoto = photos.find((photo) => photo.id === id);
    setActivePainting(activePhoto);
  }, []);

  const onCloseDetailedView = useCallback(() => {
    setActivePainting(undefined);
  }, []);

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
          description={activePainting.description}
        />
      )}
    </div>
  );
}

export default Paintings;
