import _ from "lodash";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IMAGES, type ImagesKey } from "../../assets/images/Images";
import "./details-view.less";
import { useEffect, useRef, useState } from "react";
import { callChatGPTCompletion } from "../../services/chat-gpt-service";

export interface DetailsViewProps {
  title: string;
  author: string;
  img: ImagesKey;
  location: string;
  locationUrl?: string;
  description?: string;
  onClose: () => void;
}

function DetailsView({
  title,
  author,
  img,
  location,
  locationUrl,
  description,
  onClose,
}: DetailsViewProps) {
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
          console.log("Error occured when fetching info.");
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
    console.log(event);
    if (event.key === "Enter") {
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
            <CloseIcon
              sx={{ color: "var(--current-details-view-border-color)" }}
            />
          </IconButton>
        </div>
        {paitingDescription.fetchInProgress ? (
          <div className="description-placeholder">
            Do you know this paiting?
          </div>
        ) : (
          <div className="description">
            <div>
              <h3>{title}</h3>
              <h4>{author}</h4>
            </div>
            <p>{paitingDescription.description}</p>
            <div className="description-links">
              Can be admired in{" "}
              <a href={locationUrl} target="_blank" rel="noreferrer">
                {location}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsView;
