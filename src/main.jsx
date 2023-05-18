import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import UserContext from './components/context/UserContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </UserContext>
  </React.StrictMode>,
)
