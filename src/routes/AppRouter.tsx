import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout.tsx';

import HomePage from '../features/Home/HomePage.tsx';
import UnderConstruction from '../features/UnderConstruction/UnderConstruction.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <UnderConstruction /> },
    ],
  },
]);
