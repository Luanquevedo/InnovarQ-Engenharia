import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import './index.scss'
import Form from './pages/Form/index.jsx'
import Blog from './pages/Blog/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/form",
    element: <Form/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
