import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./Pages/NotFound/NotFound";
import Entrance from "./Pages/Entrance/Entrance";
import AdPage from "./Pages/AdPage/AdPage";
import PostAd from "./Pages/PostAd/PostAd";
import Profile from "./Pages/Profile/Profile";
import Homepage from "./Pages/Home/Homepage";
import { Provider } from 'react-redux';
import store from './store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "entrance",
        element: <Entrance />,
      },
      {
        path: "ad",
        element: <AdPage />,
      },
      {
        path: "postad",
        element: <PostAd />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
