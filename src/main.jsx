import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import About from './routes/About.jsx'
import Home from './routes/Home.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage />,
    children: [
      {
        path:"about",
        element: <About />,
      },
      {
        path:"home",
        element: <Home />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
