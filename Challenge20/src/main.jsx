import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function App() {
  return <h1> HOLA MUNDO</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
