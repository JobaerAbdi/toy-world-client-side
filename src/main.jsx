import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import UserContext from './components/context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>,
)
