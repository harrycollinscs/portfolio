import { Provider } from 'react-redux'
import store, { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import All from './components/templates/All'
import Projects from './components/templates/Projects'
import About from './components/templates/About'
import Resume from './components/templates/Resume'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './theme/globalStyles'
import { lightTheme, darkTheme } from './theme/Theme'
import React, { useEffect, useState } from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <All />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

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
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </>
  </ThemeProvider>
  )
}

export default App