import { useEffect, useState } from 'react';
import './loader.less';

interface LoaderProps {
  words: string[];
}

const Loader = ({ words }: LoaderProps) => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index === words.length - 1) {
        index = 0;
      } else {
        index++;
      }

      setCurrentWord(words[index]);
    }, 300);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="loader-container">
      <div className="loader-text">{currentWord}</div>
    </div>
  );
};

export default Loader;
