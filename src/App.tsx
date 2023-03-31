import { ThemeProvider } from '@emotion/react';
import { useState } from 'react'
import './app.less';
import { lightTheme } from './utils/themes';
import Paintings from './views/Paintings';

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="app">
          <Paintings/>
      </div>
    </ThemeProvider>
  )
}

export default App
