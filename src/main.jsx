import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/homepage/Homepage.jsx'
import Login from './pages/login/Login.jsx'
import {createBrowserRouter, Outlet, Router, RouterProvider, } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import './main.css'
import SignUp from './pages/signup/SignUP.jsx'


const Layout = ()=>{
  return (<>
  <Navbar />
  <Outlet />
  <Footer />
  </>)
}


const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <HomePage/>
    }],
  },
{
  path: '/login',
  element: <Login />
},
{
  path: '/signup',
  element: <SignUp />
}])


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router}/>
  </StrictMode>
)
