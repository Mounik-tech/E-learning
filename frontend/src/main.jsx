import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home  from './pages/Home.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import About from './pages/About.jsx'
import Registration from './pages/Registration.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CoursePage  from './pages/CoursePage.jsx'
import LessonPages from './pages/LessonPages.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import ContactPage from './pages/ContactPage.jsx'
import SignIn from './pages/SignIn.jsx'
import Signup from './pages/SignUp.jsx'




const router = createBrowserRouter([{
  path: "/",
  element: <Home/>
},
{
  path: "/signup",
  element: <Signup />
},
{
 path :"/about",
 element :<About/>
},
{
  path :"/registration",
  element :<Registration/>
},
{
 path:"dashboard",
 element:<Dashboard/>
},
{
 path:"course",
 element:<CoursePage/>
},
{
  path:"LessonPages",
  element:<LessonPages/>
}, 
{
  path:"ProfilePage",
  element:<ProfilePage/>
},
{
  path:"AdminPanel",
  element:<AdminPanel/>
},
{
  path:"/contact",
  element:<ContactPage/>
},
{
  path :"/signin",
  element : <SignIn/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
