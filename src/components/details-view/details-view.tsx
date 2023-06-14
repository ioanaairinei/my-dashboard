import _ from 'lodash';
import { IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IMAGES, type ImagesKey } from '../../assets/images/paintings/Images';
import './details-view.less';
import { useEffect, useState } from 'react';
import { callChatGPTCompletion } from '../../services/chat-gpt-service';
import Description from './description';
import Loader from '../loader/loader';

export interface DetailsViewProps {
  title: string;
  author: string;
  img: ImagesKey;
  location: string;
  locationUrl?: string;
  description?: string;
  onClose: () => void;
}

function DetailsView({ title, author, img, location, locationUrl, description, onClose }: DetailsViewProps) {
  const [paitingDescription, setPaintingDescription] = useState<any>({
    fetchInProgress: true,
    description: undefined,
  });

  useEffect(() => {
    async function getInfoFromChatGPT() {
      if (title && author) {
        try {
          const chatGPTPrompt = `Tell me something about the paiting ${title} by ${author} :`;
          const result = await callChatGPTCompletion(chatGPTPrompt);

          if (!_.isEmpty(result)) {
            setPaintingDescription({
              fetchingInProgress: false,
              description: result,
            });
          } else {
            setTimeout(() => {
              setPaintingDescription({
                fetchInProgress: false,
                description: description,
              });
            }, 2000);
          }
        } catch (err) {
          console.log('Error occured when fetching info.');
          setTimeout(() => {
            setPaintingDescription({
              fetchInProgress: false,
              description: description,
            });
          }, 2000);
        }
      } else {
        setTimeout(() => {
          setPaintingDescription({
            fetchInProgress: false,
            description: description,
          });
        }, 2000);
      }
    }

    getInfoFromChatGPT();
  }, []);

  const onCloseButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClose();
    }
  };

  return (
    <div className="details-view-container" id="details-view">
      <div className="image-details-view-container">
        <img className="image-details-view" src={IMAGES[img]} alt={title} />
      </div>
      <div className="content-details-view">
        <div className="close-button">
          <IconButton
            aria-label="close"
            size="small"
            color="secondary"
            onClick={onClose}
            tabIndex={0}
            onKeyDown={(e) => onCloseButtonKeyDown(e)}
          >
            <CloseIcon sx={{ color: 'var(--current-details-view-border-color)' }} />
          </IconButton>
        </div>
        {paitingDescription.fetchInProgress ? (
          <div className="description-placeholder">
            <Loader
              words={
                Array.from((title + ' ' + author).toLowerCase().split(' ')) || ['do', 'you', 'know', 'this', 'painting']
              }
            />
          </div>
        ) : (
          <Description
            title={title}
            author={author}
            description={paitingDescription.description}
            location={location}
            locationUrl={locationUrl}
          />
        )}
      </div>
    </div>
  );
}

export default DetailsView;
