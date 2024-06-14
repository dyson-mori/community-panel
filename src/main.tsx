import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css';

import Login from './pages/login';
import Upload from './pages/upload';
import Posts from './pages/posts';
import Edit from './pages/edit';

import { PrivateRoutes } from './utils';
import { Provider } from './context';

const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`));

  return cookies ? cookies.split("=")[1] : null;
 };

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoutes token={getCookie('token')}/>,
    children: [
      {
        path: '/upload',
        element: <Upload />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/edit/:postId',
        element: <Edit />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>404 not found</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
