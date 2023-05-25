import { ThemeProvider } from "@emotion/react";
import "./app.less";
import { lightThemeMaterial } from "./utils/materialThemes";
import Paintings from "./views/Paintings";
import { ThemeSelectorProvider } from "./utils/contexts/theme-selector";
import NavBar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <ThemeProvider theme={lightThemeMaterial}>
      <ThemeSelectorProvider>
        <div className="app">
          <NavBar />
          <Paintings />
        </div>
      </ThemeSelectorProvider>
    </ThemeProvider>
  );
}

export default App;
