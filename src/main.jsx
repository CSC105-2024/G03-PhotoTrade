import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from "~react-pages"
import {BrowserRouter, useLocation, useRoutes} from 'react-router-dom'
import Layout from './layouts/root-layout'

const App = () => {
  const element = useRoutes(routes)
  const location = useLocation()
  
  return routes.filter(() => location.pathname ==='/' || location.pathname === '/market')
    .map(() => (
      <Layout>{element}</Layout>
    ))[0] || element
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
  </StrictMode>,
)