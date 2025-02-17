import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import CreateTrip from './create-trip'
import Header from './components/custom/Header' // Uppercase 'Header'

const Layout = () => (
  <>
    <Header />  {/* Use Uppercase Here */}
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />, // Include Layout to show Header on all pages
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/create-trip',
        element:<CreateTrip/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
