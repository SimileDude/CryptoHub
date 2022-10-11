import styled from '@emotion/styled'
import { ToggleButtonGroup, Typography } from '@mui/material'
import MuiToggleButton from '@mui/material/ToggleButton'
import React, { useState } from 'react'
import { WatchedState } from '../../../../ContextAPI/WatchedContext'

const CoinTabs = () => {
  const { numWatchedCoinsGroup, filterByWatchedGroup } = WatchedState()
  const [numWatchedCoins] = numWatchedCoinsGroup
  const [, setFilterByWatched] = filterByWatchedGroup

  const [displayedTab, setDisplayedTab] = useState('allCoins')

  const handleDisplayedTab = (event, newTab) => {
    console.log('newTab', newTab)
    setDisplayedTab(newTab)
    newTab === 'watchlist' ? setFilterByWatched(true) : setFilterByWatched(false)
  }

  const ToggleButton = styled(MuiToggleButton)({
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: '#C0CFBC'
    }
  })

  return (
    <>
      <ToggleButtonGroup
        exclusive
        value={displayedTab}
        onChange={handleDisplayedTab}
        aria-label="show all coins or only watched coins"
        fullWidth
        sx={{ mt: 2 }}>
        <ToggleButton
          variant="text"
          size="large"
          value="allCoins"
          id="allCoins"
          aria-label="allCoins">
          <Typography sx={{ color: '#3E3D28', fontWeight: '400' }}>All Coins</Typography>
        </ToggleButton>
        <ToggleButton
          variant="text"
          size="large"
          value="watchlist"
          sx={{
            bgcolor: 'white',
            justifyContent: 'space-around'
          }}
          aria-label="watchlist">
          <Typography sx={{ color: '#3E3D28', fontWeight: '400' }}>Watched Coins</Typography>
          <Typography
            sx={{
              border: '1px solid Red',
              borderRadius: '50%',
              height: 40,
              width: 40,
              pt: 1
            }}>
            {numWatchedCoins}
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default CoinTabs
