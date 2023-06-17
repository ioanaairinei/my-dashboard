import { ReactElement, Suspense, useEffect, useRef, useState } from 'react';
import React from 'react';
import './js-advent-view.less';
import { ErrorBoundary } from 'react-error-boundary';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Loader from '../../components/loader/loader';
import { useSnowfall } from '../../utils/hooks/snowflakes-animation/use-snowfall';

const PriceSlider = React.lazy(() => import('remote/PriceSlider'));
const KeyPressChecker = React.lazy(() => import('remote/KeyPressChecker'));
const TipCalculator = React.lazy(() => import('remote/TipCalculator'));

export interface ImportedComponentData {
  id: number;
  text: string;
  caption: string;
  component: ReactElement;
}

const data: ImportedComponentData[] = [
  {
    id: 1,
    text: 'Price Range Slider',
    caption: 'Advent of JavaScript, Challenge 6',
    component: <PriceSlider />,
  },
  {
    id: 2,
    text: 'Tip Calculator',
    caption: 'Advent of JavaScript, Challenge 7',
    component: <TipCalculator />,
  },
  {
    id: 3,
    text: 'Key press checker',
    caption: 'Advent of JavaScript, Challenge 4',
    component: <KeyPressChecker />,
  },
];

const loaderWords = ['we', 'are', 'loading', 'your', 'component'];

const JSAdvent = () => {
  const [activeComponentId, setActiveComponentId] = useState<number>();
  const viewRef = useRef<HTMLObjectElement>(null);
  const { createSnow, removeSnow } = useSnowfall();

  useEffect(() => {
    const snowContainer: HTMLDivElement = document.createElement('div');
    snowContainer.className = 'snow-container';
    viewRef?.current?.append(snowContainer);

    createSnow(40, snowContainer);

    return () => removeSnow(snowContainer);
  }, [viewRef.current, activeComponentId]);

  const onCloseButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setActiveComponentId(undefined);
    }
  };

  return (
    <div className="js-advent-container" ref={viewRef}>
      {!activeComponentId && (
        <div className="js-advent-grid-container">
          {data.map((component) => (
            <button
              className="js-advent-item-card"
              onClick={() => setActiveComponentId(component.id)}
              key={component.id}
            >
              <p>{component.text}</p>
            </button>
          ))}
        </div>
      )}
      {activeComponentId && (
        <>
          <div className="close-button">
            <IconButton
              aria-label="close"
              size="small"
              color="secondary"
              onClick={() => setActiveComponentId(undefined)}
              tabIndex={0}
              onKeyDown={(e) => onCloseButtonKeyDown(e)}
            >
              <CloseIcon sx={{ color: 'var(--current-details-view-border-color)' }} />
            </IconButton>
          </div>
          <ErrorBoundary fallback={<div className="fallback-message">Oops! Something went wrong.</div>}>
            <div className="js-advent-active-component-container">
              <Suspense fallback={<Loader words={loaderWords} />}>
                <div className="js-advent-component">{data.find((el) => el.id === activeComponentId)?.component}</div>
              </Suspense>
            </div>
          </ErrorBoundary>
        </>
      )}
    </div>
  );
};

export default JSAdvent;
