import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home.tsx';
import Users from './pages/users.tsx';
import RootLayout from './pages/root.tsx';
import UsersId from './pages/usersId.tsx';
const router = createBrowserRouter([

{
  path:"/",
  element:<RootLayout/>,
  children:[
    {
      index:true,
      element: <HomePage/>,
    },
    {
      path: "/users",
      element: <Users/>,
    },
    {
      path: "/users/:usersId",
      element: <UsersId/>,
    },
  ]
}

  
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
 