import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FormProvider } from './context/FormContext.jsx'

createRoot(document.getElementById('root')).render(
  <FormProvider>
    <App />
  </FormProvider>,
)
