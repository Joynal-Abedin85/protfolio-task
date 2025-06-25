import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './page/Home';
import Mainlayout from './Mainlayout';
import Service from './page/Service';
import Contect from './component/Contect';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "service",
        element: <Service/>
      },
      {
        path: "contact",
        element: <Contect />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
