import { useTheme } from '@emotion/react'
import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import CoinDetails from './CoinDetails/CoinDetails'
import CoinsPanel from './CoinsPanel/CoinsPanel'

function Homepage() {
  //Method provided by mui
  const theme = useTheme()
  const showCoinDetails = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: 0
      }}>
      <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
        <CoinsPanel />
      </Grid>
      {showCoinDetails && (
        <Grid item lg={7}>
          <CoinDetails />
        </Grid>
      )}
    </Grid>
  )
}

export default Homepage
