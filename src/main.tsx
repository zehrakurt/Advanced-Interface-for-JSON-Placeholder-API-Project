import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home.tsx';
import Users, { usersLoader } from './pages/users.tsx';
import RootLayout from './pages/root.tsx';
import UsersId, { userLoader } from './pages/usersId.tsx';
import Userpost from './pages/userpost.tsx';
import Userstodos from './pages/userstodos.tsx';
import Usersalbum from './pages/usersalbum.tsx';
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
      loader:usersLoader

    },
    {
      path: "users/:userId",
      element: <UsersId/>,
      loader:userLoader,
      children:[
        {
        path:"post",
        element:<Userpost/>
        },
        {
          path:"todos",
          element:<Userstodos/>,
        },
        {
          path:"album",
          element:<Usersalbum/>,
        },
      ]
    },
    
  ]
}

  
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
 