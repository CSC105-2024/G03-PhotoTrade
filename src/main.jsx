import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from "~react-pages"
import {BrowserRouter, useLocation, useRoutes} from 'react-router-dom'
import Layout from '@/layouts/root-layout'

const App = () => {
  const location = useLocation()
  const path = [
    '/',
    '/market',
  ]
  
  // return routes.filter(() => path.includes(location.pathname))
  //   .map(() => (
  //     <Layout>{useRoutes(routes)}</Layout>
  //   ))[0] || useRoutes(routes)
  
  return useRoutes(routes)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)