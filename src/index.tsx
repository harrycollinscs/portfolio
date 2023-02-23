import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store, { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import All from './components/templates/All';
import Projects from './components/templates/Projects';
import About from './components/templates/About';
import Resume from './components/templates/Resume';

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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
