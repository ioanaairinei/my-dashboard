import { ReactElement, useState } from 'react';
import './js-advent-view.less';
import KeyPressChecker from 'remote/KeyPressChecker';
import PriceSlider from 'remote/PriceSlider';
import TipCalculator from 'remote/TipCalculator';

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

const JSAdvent = () => {
  const [activeComponentId, setActiveComponentId] = useState<number>();

  return (
    <div className="js-advent-container">
      {!activeComponentId && (
        <div className="js-advent-grid-container">
          {data.map((component) => (
            <button className="js-advent-item-card" onClick={() => setActiveComponentId(component.id)}>
              <p>{component.text}</p>
            </button>
          ))}
        </div>
      )}
      {activeComponentId && (
        <div className="js-advent-active-component-container">
          {data.find((el) => el.id === activeComponentId)?.component}
        </div>
      )}
    </div>
  );
};

export default JSAdvent;
