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
import Userpost,{userPostLoader} from './pages/userpost.tsx';
import Userstodos, { userTodosLoader } from './pages/userstodos.tsx';
import Usersalbum, { userAlbumsLoader } from './pages/usersalbum.tsx';
import Albumscomment, { albumsCommentsLoader } from './pages/albumscomment.tsx';
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
      children:[
        {
          index:true,
          element: <UsersId/>,
          loader:userLoader,
        },
        {
        path:"posts",
        element:<Userpost/>,
        loader:userPostLoader
        },
        {
          path:"todos",
          element:<Userstodos/>,
          loader:userTodosLoader
        },
        {
          path:"albums",
          element:<Usersalbum/>,
          loader:userAlbumsLoader
        },
      ]
    },
    {
      path:"users/:userId/albums/:albumId",
      element:<Albumscomment/>,
      loader:albumsCommentsLoader
    },
  ]
}

  
]);




ReactDOM.createRoot(document.getElementById('root')!).render(

   <RouterProvider router={router} />

)
 