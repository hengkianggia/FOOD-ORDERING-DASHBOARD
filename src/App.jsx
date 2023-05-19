import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import Overview from "./pages/Overview";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

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
          path: "orders",
          element: <Orders />,
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
