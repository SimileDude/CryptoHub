import { Grid } from '@mui/material'
import React from 'react'
import CoinDetails from './CoinDetails/CoinDetails'
import CoinsPanel from './CoinsPanel/CoinsPanel'

function Homepage() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        height: 'calc(100vh - 50px)'
      }}>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
        <CoinsPanel />
      </Grid>
      <Grid item xs={0} sm={0} md={7} lg={7} xl={8}>
        <CoinDetails />
      </Grid>
    </Grid>
  )
}

export default Homepage
