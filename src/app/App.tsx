import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
