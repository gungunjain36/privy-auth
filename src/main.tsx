import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrivyProvider } from '@privy-io/react-auth';
import App from './App';
import './index.css';
import dotenv from 'dotenv';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID || ''}
      config={{
        loginMethods: ['wallet', 'email'],
        appearance: {
          theme: 'light',
          accentColor: '#3B82F6',
          logo: 'https://your-logo-url.com/logo.png',
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);
