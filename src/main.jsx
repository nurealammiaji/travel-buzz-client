import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import News from './components/News/News.jsx';
import Destination from './components/Destination/Destination.jsx';
import Blog from './components/Blog/Blog.jsx';
import Contact from './components/Contact/Contact.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Forgot from './components/Forgot/Forgot.jsx';
import Booking from './components/Booking/Booking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "booking",
        element: <Booking></Booking>
      },
      {
        path: "news",
        element: <News></News>
      },
      {
        path: "destination",
        element: <Destination></Destination>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "forgot",
        element: <Forgot></Forgot>
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
