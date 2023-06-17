import './use-snowfall.less';

const random = (num: number) => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return ` 
  top: -${top}%; 
  left: ${left}%; 
  font-size: ${size}px; 
  animation-duration: ${dur}s; 
  `;
};

export const useSnowfall = () => {
  const snowFlakes = ['&#10052', '&#10053', '&#10054'];

  const createSnow = (num: number, snowContainer: HTMLElement) => {
    for (let i = num; i > 0; i--) {
      const snow: HTMLDivElement = document.createElement('div');
      snow.className = 'snow';
      snow.style.cssText = getRandomStyles();
      snow.innerHTML = snowFlakes[random(2)];
      snowContainer?.append(snow);
    }
  };

  const removeSnow = (snowContainer: HTMLElement) => {
    if (snowContainer) {
      snowContainer.style.opacity = '0';
      setTimeout(() => {
        snowContainer.remove();
      }, 500);
    }
  };

  return {
    createSnow,
    removeSnow,
  };
};
