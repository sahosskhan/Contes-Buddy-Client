import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { HelmetProvider } from 'react-helmet-async'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Authentication/AuthProvider'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
      </QueryClientProvider>
      </HelmetProvider>
      </AuthProvider>
  </React.StrictMode>,
)
