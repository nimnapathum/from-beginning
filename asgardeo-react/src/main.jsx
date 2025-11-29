import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

const clientId = import.meta.env.VITE_ASGARDEO_CLIENT_ID;
const baseUrl = import.meta.env.VITE_ASGARDEO_BASE_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId={clientId}
      baseUrl={baseUrl}
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
)
