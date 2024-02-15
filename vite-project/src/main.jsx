import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer/Footer.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import AutorizacionPerfiles from './components/AutorizacionPerfiles/AutorizacionPerfiles.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Footer />
  },
  {
    path: "app",
    element: <App />
  },
  {
    path: "autorizacionPerfiles",
    element: <AutorizacionPerfiles />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
