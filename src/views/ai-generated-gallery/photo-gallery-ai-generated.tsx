import CardsContainer from '../../components/cards-container/CardsContainer';
import './photo-gallery-ai-generated.less';
import { useCallback, useMemo, useState } from 'react';
import { Photo } from '../paintings/Paintings';
import { IMAGES, type ImagesKey } from '../../assets/images/paintings/Images';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const PhotoGalleryAIGenerated = React.memo(() => {
  const [activePainting, setActivePainting] = useState<Photo>();
  const photos = useMemo(() => {
    return Object.entries(IMAGES)
      .filter(([key, imageSrc]) => key.toString().startsWith('DALL_E'))
      .map(([key, imageSrc]) => ({
        id: +key.slice(-2),
        img: key,
        title: '',
        painter: '',
        location: '',
        locationUrl: '',
      }));
  }, []);

  const onClickPhotoCard = useCallback(
    (id: number) => {
      const activePhoto = photos.find((photo) => photo.id === id);
      setActivePainting(activePhoto);
    },
    [photos],
  );

  const onCloseDetailedView = useCallback(() => {
    setActivePainting(undefined);
  }, []);

  return (
    <div className="paintings-container">
      {activePainting == null ? (
        <CardsContainer onCardClick={onClickPhotoCard} photos={photos} />
      ) : (
        <div className="dall-e-image-container-full">
          <div className="close-button">
            <IconButton
              aria-label="close"
              size="small"
              color="secondary"
              onClick={onCloseDetailedView}
              tabIndex={0}
              onKeyDown={onCloseDetailedView}
            >
              <CloseIcon sx={{ color: 'var(--current-details-view-border-color)' }} />
            </IconButton>
          </div>
          <img src={IMAGES[activePainting.img as ImagesKey]} alt={activePainting.title} />
        </div>
      )}
    </div>
  );
});

export default PhotoGalleryAIGenerated;
