import React, { ReactElement, useEffect, useState } from 'react';
import { changeTheme } from './theme-selector-utils';

export interface ThemeProviderProps {
  children?: ReactElement[] | ReactElement;
}

const ThemeSelectorContext = React.createContext({
  themeName: 'dark',
  toggleTheme: () => {},
});

const ThemeSelectorProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <ThemeSelectorContext.Provider value={{ themeName: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export { ThemeSelectorContext, ThemeSelectorProvider };
