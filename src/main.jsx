import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { weddingConfig } from './config'

document.documentElement.style.setProperty('--body-bg', weddingConfig.theme.bodyColor)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

