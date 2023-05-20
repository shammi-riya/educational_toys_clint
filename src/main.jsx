import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'

import Swal from 'sweetalert2/dist/sweetalert2.js'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
    
  </React.StrictMode>,
)
