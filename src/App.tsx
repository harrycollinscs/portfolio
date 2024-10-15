import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./components/templates/About";
import All from "./components/templates/All";
import Projects from "./components/templates/Projects";
import Resume from "./components/templates/Resume";

import React from "react";
import NavigationBar from "./components/molecules/NavigationBar";
import ScrollToTop from "./helpers/ScrollToTop";
import { lightTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/globalStyles";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <React.StrictMode>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <NavigationBar />
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<All />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />

                  {/* Not found fallback */}
                  <Route path="*" element={<div>Not found</div>} />
                </Routes>
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </React.StrictMode>
      </>
    </ThemeProvider>
  );
};

export default App;
