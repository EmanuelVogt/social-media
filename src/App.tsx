import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import { Layout } from './components/Layout'
import { AppThemeProvider } from './contexts/ThemeContext'
import { AppRoutes } from './routes'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export function App(): JSX.Element {
  return (
    <AppThemeProvider>
      <Router>
        <CssBaseline />
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </AppThemeProvider>
  )
}
