import { Provider } from 'react-redux'
import store, { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import All from './components/templates/All'
import Projects from './components/templates/Projects'
import About from './components/templates/About'
import Resume from './components/templates/Resume'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './theme/globalStyles'
import { lightTheme, darkTheme } from './theme/Theme'
import React, { useEffect, useState } from 'react'
import ScrollToTop from './helpers/ScrollToTop'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeMediaQuery.matches);

    const handleChange = (event: any) => {
      setDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <>
      <GlobalStyles/>
      <React.StrictMode>
        
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
            <ScrollToTop />
              <Routes>
                <Route path="/" element={<All/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
              </Routes>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </>
  </ThemeProvider>
  )
}

export default App