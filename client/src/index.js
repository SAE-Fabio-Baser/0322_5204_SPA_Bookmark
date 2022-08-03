import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const root = createRoot(document.querySelector('#app'))

root.render(<App />)