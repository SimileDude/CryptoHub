import { Box } from '@mui/material'
import React from 'react'
import { CoinState } from '../../../../ContextAPI/CoinContext'
import CoinDetailsCard from '../../../Layout/CoinDetailsCard'
import Chart from './Chart'
import '../panels.css'

const CoinDetails = () => {
  const { selectedCoinGroup, allCoinsGroup } = CoinState() //Using Context API
  const [selectedCoin] = selectedCoinGroup //Using Context API

  return (
    <>
      <Box component="h1" sx={{ fontWeight: '300' }}>
        {selectedCoin?.name}
      </Box>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
          // alignContent: 'space-around'
        }}>
        <Chart selectedCoin={selectedCoin} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexFlow: 'row wrap',
            alignContent: 'flex-end',
            alignItems: 'flex-start',
            gap: 2
          }}>
          {selectedCoin ? (
            <>
              <CoinDetailsCard
                title="Price"
                mainStat={`$${Number(selectedCoin.price.toFixed(2)).toLocaleString()} CAN` || 0}
                percChange={
                  selectedCoin.priceChange
                    ? `${selectedCoin.priceChange?.toFixed(2)}% in 24 hrs`
                    : ''
                }
              />
              <CoinDetailsCard
                title="Market Cap"
                mainStat={`$${Number(selectedCoin.marketCap.toFixed(2)).toLocaleString()} CAN` || 0}
                percChange={
                  selectedCoin.marketCapChange24h ? (
                    `${selectedCoin.marketCapChange24h?.toFixed(2)}% in 24 hrs`
                  ) : (
                    <br />
                  )
                }
              />
              <CoinDetailsCard
                title="Volume (24h)"
                mainStat={`${selectedCoin.volume.toLocaleString()}` || 0}
                percChange={<br />}
              />

              <CoinDetailsCard
                title="Circulating Supply"
                mainStat={`${Number(selectedCoin.totalSupply.toFixed(0)).toLocaleString()}` || 0}
                percChange={<br />}
              />
            </>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'inherit',
                width: 'inherit'
              }}>
              <Box component="span" sx={{ color: 'customGrey.main', fontWeight: 'bold' }}>
                Select a coin on the left
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}

export default CoinDetails
