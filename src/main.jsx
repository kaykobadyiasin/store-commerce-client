import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import Cart from './pages/Cart/Cart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
