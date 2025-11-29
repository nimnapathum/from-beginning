import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar.tsx'
import { AsgardeoProvider } from '@asgardeo/react'
import { env } from './config/env.ts'

createRoot(document.getElementById('root')!).render(
  <AsgardeoProvider
  clientId={env.VITE_ASGARDEO_CLIENT_ID}
  baseUrl={env.VITE_ASGARDEO_BASE_URL}
  >
    <BrowserRouter>
      <Navbar />
      <div className='w-full'>
        <App />
      </div>
    </BrowserRouter>
  </AsgardeoProvider>
)
