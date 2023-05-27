import { ThemeProvider } from "@emotion/react";
import "./app.less";
import { lightThemeMaterial } from "./utils/materialThemes";
import { ThemeSelectorProvider } from "./utils/contexts/theme-selector";
import LandingPage from "./views/landing-page/landing-page";
import Paintings from "./views/paintings/Paintings";
import { Route, Routes } from "react-router-dom";
import NoViewFound from "./views/no-view-found/no-view-found";
import Home from "./views/home/home";

function App() {
  return (
    <ThemeProvider theme={lightThemeMaterial}>
      <ThemeSelectorProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<LandingPage />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="*" element={<NoViewFound />} />
          </Route>
        </Routes>
      </ThemeSelectorProvider>
    </ThemeProvider>
  );
}

export default App;
