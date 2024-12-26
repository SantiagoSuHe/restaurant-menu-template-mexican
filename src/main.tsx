import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/:lang',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate to="/en" replace />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);