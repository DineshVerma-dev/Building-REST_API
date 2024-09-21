import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Add from "./pages/Add.jsx"
import Update from "./pages/Update.jsx"
import Profile from "./pages/Profile.jsx"
import Logout from './pages/Logout.jsx'
import Layout from './Layout.jsx'
import SignUp from './pages/SignUp.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home />} />
      <Route path='add' element={<Add />} />
      <Route path='update' element={<Update />} />
      <Route path='profile' element={<Profile />} />
      <Route path='logout' element={<Logout />} />
      <Route path='signup' element={<SignUp/>} />
    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
