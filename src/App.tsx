import { ThemeSelectorProvider } from './utils/contexts/theme-selector';
import LandingPage from './views/landing-page/landing-page';
import Paintings from './views/paintings/Paintings';
import { Route, Routes } from 'react-router-dom';
import NoViewFound from './views/no-view-found/no-view-found';
import Home from './views/home/home';
import PhotoGalleryAIGenerated from './views/ai-generated-gallery/photo-gallery-ai-generated';
import JSAdvent from './views/js-advent/js-advent-view';

function App() {
  return (
    <ThemeSelectorProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/dalle" element={<PhotoGalleryAIGenerated />} />
          <Route path="/advent" element={<JSAdvent />} />
          <Route path="*" element={<NoViewFound />} />
        </Route>
      </Routes>
    </ThemeSelectorProvider>
  );
}

export default App;
