import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-black text-white'>
      <GoogleOAuthProvider clientId="756317558274-v48kqpdqa4k17jof96jlqdtrkbj9hoiu.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider> 
    </div>
  </StrictMode>,
)
