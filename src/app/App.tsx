import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import MapPage from "../pages/MapPage/MapPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/map",
      element: <MapPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
