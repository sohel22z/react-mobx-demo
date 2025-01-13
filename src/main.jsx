import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'mobx-react';
import mobxStore from './stores/mobxStore';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider mobxStore={mobxStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
