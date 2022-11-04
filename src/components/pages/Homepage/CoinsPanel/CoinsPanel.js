import React, { useState } from 'react'
import CoinSearch from './CoinSearch'
import CoinTabs from './CoinTabs'
import { Container } from '@mui/system'
import CoinList from './CoinList'

const CoinsPanel = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Container
      sx={{
        backgroundColor: '#F7F7F7',
        display: 'flex',
        flexGrow: 1,
        height: '100vh',
        flexDirection: 'column',
        overflow: 'scroll',
        mt: '70px'
      }}>
      <CoinTabs />
      <CoinSearch onSearch={handleSearch} />
      <CoinList search={search} />
    </Container>
  )
}

export default CoinsPanel
