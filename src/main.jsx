import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Destination from './Pages/Destination.jsx'
import Crew from './Pages/Crew.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/destination', element: <Destination /> },
        { path: '/crew', element: <Crew /> },
      ],
    },
  ],
  {
    basename: '/space_tourism-website-react', // ESSA LINHA FAZ TUDO FUNCIONAR NO GITHUB PAGES
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
