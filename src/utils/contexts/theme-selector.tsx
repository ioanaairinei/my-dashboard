import React, { ReactElement, useEffect, useState } from "react";
import { changeTheme } from "./theme-selector-utils";

export interface ThemeProviderProps {
  children?: ReactElement[] | ReactElement;
}

const ThemeSelectorContext = React.createContext({
  themeName: "dark",
});

const ThemeSelectorProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("dark");

  const selectTheme = (theme: string) => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <ThemeSelectorContext.Provider value={{ themeName: theme }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export { ThemeSelectorContext, ThemeSelectorProvider };
