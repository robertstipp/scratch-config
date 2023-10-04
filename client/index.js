import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './App'

import '../public/fonts/Nexa-Heavy.ttf'

const container = document.getElementById('root')

const root = createRoot(container);

root.render(
  <App />
)