import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashbpard from '@/layout/Dashboard.tsx';
import { Login, Signup, Home, ForgotPassword } from '../pages';



  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Dashbpard /> ,
        children:[
          {
            path: '/',
            element: <Home />,
          },
     
        ]
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path:"/auth/forgot-password",
        element: <ForgotPassword />,
      }
    ],
    // {
    //   basename: '/doodle-sync',

    // }
  );



const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
