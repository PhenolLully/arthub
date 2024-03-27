import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Profile from './components/Pages/Profile.jsx'
import Post from './components/Post/Post.jsx'
import Login from './components/Pages/Login.jsx'
import Signup from './components/Pages/Signup.jsx'
import auth from './utils/auth.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pages',
        element: <Profile />,
      },
      {
        path: 'post',
        element: auth.loggedIn() ? <Post />: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

