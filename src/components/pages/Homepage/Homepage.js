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
        flexGrow: 9,
        flexWrap: 'nowrap',
        padding: 0,
        m: 0,
        width: '100vw'
      }}>
      <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
        <CoinsPanel />
      </Grid>
      {showCoinDetails && (
        <Grid item xs={0} sm={0} md={6} lg={7} xl={8}>
          <CoinDetails />
        </Grid>
      )}
    </Grid>
  )
}

export default Homepage
