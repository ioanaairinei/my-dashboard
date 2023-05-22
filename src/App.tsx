import { ThemeProvider } from "@emotion/react";
import "./app.less";
import { lightThemeMaterial } from "./utils/materialThemes";
import Paintings from "./views/Paintings";
import { ThemeSelectorProvider } from "./utils/contexts/theme-selector";

function App() {
  return (
    <ThemeProvider theme={lightThemeMaterial}>
      <ThemeSelectorProvider>
        <div className="app">
          <Paintings />
        </div>
      </ThemeSelectorProvider>
    </ThemeProvider>
  );
}

export default App;
