import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// pages
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Habilidades from './pages/Habilidades'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'

const router = createBrowserRouter([
  {
    path: "/portifolio/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Inicio/>
      },
      {
        path: "/portifolio/sobre",
        element: <Sobre/>
      },
      {
        path: "/portifolio/habilidades",
        element: <Habilidades/>
      },
      {
        path: "/portifolio/projetos",
        element: <Projetos/>
      },
      {
        path: "/portifolio/contato",
        element: <Contato/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
