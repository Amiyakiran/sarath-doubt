import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContextStatus from './AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter> 
   <AuthContextStatus>
    <App />
    </AuthContextStatus>
   </BrowserRouter>
  </React.StrictMode>,
)
