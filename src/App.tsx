import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import { AppThemeProvider } from './contexts/ThemeContext'
import { AppRoutes } from './routes'
import { store } from './store'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <Router>
          <CssBaseline />
          <AppRoutes />
        </Router>
      </AppThemeProvider>
    </Provider>
  )
}
