import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import "./assets/css/header-styles.css" // Import CSS file
import "./assets/css/style.css"
import "./assets/css/admin-styles.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
