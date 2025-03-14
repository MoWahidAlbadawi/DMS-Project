import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//Core library for older browsers
import 'core-js/stable';
import 'regenerator-runtime/runtime';


//provide chakra ui
import { Provider as ChakraProvider } from './components/ui/provider.tsx'

//provide redux toolkit
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './Store/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider>
        <ReduxProvider store={store}>
      <App />
      </ReduxProvider>
      </ChakraProvider>
  </StrictMode>,
)
