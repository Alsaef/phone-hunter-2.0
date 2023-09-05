import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Pages/HomePage/home.jsx';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Order from './Pages/Orderfeild/Order';
import MyOrder from './Pages/MyOrder/MyOrder';
import Contect from './Pages/Contect/Contect';
import Private from './Private/Private';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: < Home/>,
      },
      {
        path: "/orders",
        element: <Private>< MyOrder/></Private>,
      },
      {
        path: "/contact",
        element: <Private>< Contect/></Private>,
      },
      {
        path: "/chackout/:id",
        element: <Private>< Order/></Private>,
        loader:({params})=> fetch(`https://phone-hunter-backend-production.up.railway.app/phones/${params.id}`)
      },
      {
        path: "/login",
        element: < Login/>,
      },
      {
        path: "/register",
        element: < Register/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
)
