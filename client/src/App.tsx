
import Products from './pages/Products';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Products />
  },
  {
    path: "*",
    element:<NotFound />
  },
]);

const  App = () => {

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
