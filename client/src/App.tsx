import { FC } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Products from './pages/Products';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App : FC = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
