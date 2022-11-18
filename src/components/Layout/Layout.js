import MainNavigation from './MainNavigation'
import React from 'react'
import { Box } from '@mui/material'

function Layout(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <MainNavigation />
      <main>{props.children}</main>
    </Box>
  )
}

export default Layout
