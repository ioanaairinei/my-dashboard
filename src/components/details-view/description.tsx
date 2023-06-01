import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

export interface DescriptionProps {
  title: string;
  author: string;
  description: string;
  location?: string;
  locationUrl?: string;
}

const Description = ({ title, author, description, location, locationUrl }: DescriptionProps) => {
  return (
    <div className="description">
      <div>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <div>
        <p>
          {description}
          {description !== '?' && (
            <Tooltip
              title={
                <a
                  className="description-info-link"
                  href="https://platform.openai.com/docs/models/gpt-3-5"
                  target="_blank"
                >
                  Generated with Open AI GPT-3.5
                </a>
              }
            >
              <InfoIcon
                sx={{
                  color: 'var(--current-details-view-border-color)',
                  fontSize: 14,
                }}
              />
            </Tooltip>
          )}
        </p>
      </div>
      <div className="description-links">
        Can be admired in{' '}
        <a href={locationUrl} target="_blank" rel="noreferrer">
          {location}
        </a>
      </div>
    </div>
  );
};

export default Description;
