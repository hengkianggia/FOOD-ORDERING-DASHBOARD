import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import Overview from "./pages/Overview";
import Transtractions from "./pages/Transtractions";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Profile from "./pages/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "dashboard",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "transtractions",
          element: <Transtractions />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "addproduct",
          element: <NewProduct />,
        },
      ],
    },
    {
      path: "profil",
      children: [{ index: true, element: <Profile /> }],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
