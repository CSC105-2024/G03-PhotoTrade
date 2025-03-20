import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from "~react-pages"
import {BrowserRouter, useRoutes} from 'react-router-dom'
//import App from './App.jsx'

const App = () => {
  return useRoutes(routes);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
  </StrictMode>,
)
