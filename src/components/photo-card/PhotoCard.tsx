import { useState } from 'react';
import IMAGES, { ImagesKey } from '../../assets/images/Images';
import './photo-card.less';

export interface PhotoCardProps {
    title: string,
    id: number,
    imgSrc: ImagesKey,
    painter: string,
    onClick: (id: number) => void,
}

const PhotoCard = ({id, title, imgSrc, painter, onClick}: PhotoCardProps) => {

    const imageSrc: ImagesKey = imgSrc;

    return (
        <div className="photo-card-container" onClick={() => onClick(id)}>
            <img 
            className="photo-card-image" 
            src={IMAGES[imageSrc]} 
            alt={title} 
            />
            <div className="middle">
                <div className="text">{`${title}\n\n${painter}`}</div>
            </div>
        </div>
    )
}

export default PhotoCard;