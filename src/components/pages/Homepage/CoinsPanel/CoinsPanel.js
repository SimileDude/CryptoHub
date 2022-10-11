import React, { useState } from 'react'
import CoinSearch from './CoinSearch'
import CoinTabs from './CoinTabs'
import { Container } from '@mui/system'
import CoinList from './CoinList'
import { Typography } from '@mui/material'

const CoinsPanel = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Container
      className="panel coin_list_panel"
      sx={{ backgroundColor: '#F7F7F7', display: 'flex' }}>
      <Typography variant="h3" align="left" sx={{ mt: 2 }}>
        Cryptocurrencies
      </Typography>
      <CoinTabs />
      <CoinSearch onSearch={handleSearch} />
      <CoinList search={search} />
    </Container>
  )
}

export default CoinsPanel
