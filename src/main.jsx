import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from '../src/Redux/store';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <App /> 
  </Provider>,
)
