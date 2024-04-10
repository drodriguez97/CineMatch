import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <body className="min-h-screen light bg-white">
        <App />
      </body>
    </NextUIProvider>
  </React.StrictMode>,
)
