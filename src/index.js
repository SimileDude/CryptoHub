import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import CoinProvider from './ContextAPI/CoinContext'
import WatchedProvider from './ContextAPI/WatchedContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
const theme = createTheme({
  palette: {
    primary: {
      main: '#090C9B'
    },
    secondary: {
      main: '#B4C5E4'
    },
    ivory: {
      main: '#FBFFF1'
    },
    darkYellow: {
      main: '#EFB701',
      dark: '#efa301'
    },
    customGrey: {
      light: '#EDEDEB',
      main: '#A6A8AC'
    },
    darkGreen: {
      light: '#C0CFBC',
      main: '#A8B6A5'
    }
  },
  typography: {
    allVariants: {
      fontWeight: '100'
    }
  }
})

root.render(
  <WatchedProvider>
    <CoinProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CoinProvider>
  </WatchedProvider>
)
