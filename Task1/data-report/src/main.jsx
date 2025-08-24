import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataReport from './DataReport.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataReport />
  </StrictMode>,
)
