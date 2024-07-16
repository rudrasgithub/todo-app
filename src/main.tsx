import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
		clientId="f04d4e722d9e44f5be46a743fe6af860"
		domain="https://rudra.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>,
)
