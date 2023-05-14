import _ from "lodash";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IMAGES, { type ImagesKey } from "../../assets/images/Images";
import "./details-view.less";
import { useEffect, useRef, useState } from "react";
import { callChatGPTCompletion } from "../../services/chat-gpt-service";

export interface DetailsViewProps {
  title: string;
  author: string;
  img: ImagesKey;
  location: string;
  locationUrl?: string;
  onClose: () => void;
}

function DetailsView({
  title,
  author,
  img,
  location,
  locationUrl,
  onClose,
}: DetailsViewProps) {
  const [paitingDescription, setPaintingDescription] = useState<any>({
    fetchInProgress: true,
    description: undefined,
  });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    async function getInfoFromChatGPT() {
      const chatGPTPrompt = `Tell me something about the paiting ${title} by ${author} :`;
      try {
        const result = await callChatGPTCompletion(chatGPTPrompt);
        if (_.isEmpty(result)) {
          setPaintingDescription({
            fetchingInProgress: false,
            description: result,
          });
        }

        /* setTimeout(() => {
                    setPaintingDescription(
                        {
                            fetchInProgress: false,
                            description: "Beauty, Wealth and Spirit is a painting by Hungarian artist László Tóth. It is an oil painting on canvas, measuring 60 x 60 cm. The painting depicts three figures, each representing a different concept. The figure on the left is a woman, representing beauty. The figure in the middle is a man, representing wealth. The figure on the right is a bird, representing spirit. The painting is a representation of the importance of finding balance between beauty, wealth, and spirit in life."
                        })
                }, 2000); */
      } catch (err) {
        console.log("Error occured when fetching info.");
      }
    }

    getInfoFromChatGPT();
  }, []);

  return (
    <div className="details-view-container">
      <div className="image-details-view-container" ref={imageRef}>
        <img className="image-details-view" src={IMAGES[img]} alt={title} />
      </div>
      <div className="content-details-view">
        <div className="close-button">
          <IconButton
            aria-label="close"
            size="small"
            color="secondary"
            onClick={onClose}
          >
            <CloseIcon />
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
