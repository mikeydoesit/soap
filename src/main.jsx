import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/global.css'

import Home from './components/Home'


// Routes
const router = createBrowserRouter([
  { path: "/", element: <Home /> }
  // { path: "/create-book", element: <CreateBook /> },
  // { path: "/show-book/:id", element: <ShowBookDetails /> },
  // { path: "/edit-book/:id", element: <UpdateBookInfo /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
