import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";
import OrderReview from "./Components/OrderReview/OrderReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children : [
      {
        path : '/',
        element : <Home/>,
        loader : () => fetch('tshirts.json')
      },
      {
        path : 'review',
        element : <OrderReview/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);