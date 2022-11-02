import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CoinState } from '../../../../ContextAPI/CoinContext'
import CoinDetailsCard from '../../../Layout/CoinDetailsCard'
import Chart from './Chart'

const CoinDetails = () => {
  const { selectedCoinGroup, allCoinsGroup } = CoinState() //Using Context API
  const [selectedCoin, setSelectedCoin] = selectedCoinGroup //Using Context API
  const [shares, setShares] = useState(0)

  if (selectedCoin) {
    return (
      <>
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
          <Box component="h1" sx={{ fontWeight: '300', flex: 2, my: 3 }}>
            {selectedCoin?.name}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              gap: 2
            }}>
            <Button
              sx={{
                cursor: 'pointer',
                padding: 2,
                minWidth: 100,
                border: '1px solid #C0CFBC',
                borderRadius: 5,
                fontSize: '.9rem',
                color: 'darkGreen.main',
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: 'darkGreen.main',
                  color: 'white'
                }
              }}
              onClick={(e) => setShares((currShares) => currShares + 1)}>
              <Typography
                sx={{
                  fontWeight: '400'
                }}>
                Buy Coin
              </Typography>
            </Button>
            <Button
              sx={{
                cursor: 'pointer',
                padding: 2,
                fontWeight: '400',
                minWidth: 100,
                border: '1px solid #C0CFBC',
                borderRadius: 5,
                fontSize: '.9rem',
                color: 'darkGreen.main',
                alignSelf: 'end',
                '&:hover': {
                  backgroundColor: 'darkGreen.main',
                  color: 'white'
                }
              }}
              onClick={(e) => setShares((currShares) => (currShares === 0 ? 0 : currShares - 1))}>
              <Typography
                sx={{
                  fontWeight: '400'
                }}>
                Sell Coin
              </Typography>
            </Button>

            <Box
              sx={{
                ml: 10,
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 5
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'baseline',
                  alignItems: 'center'
                }}>
                <Typography sx={{ fontSize: '.75rem', fontWeight: 500 }}>Coins</Typography>
                <Typography sx={{ fontSize: '1.25rem' }}>{shares}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '.75rem', fontWeight: 500 }}>Cost</Typography>
                <Typography sx={{ fontSize: '1.25rem', mr: 2 }}>
                  $
                  {Number((selectedCoin?.price * shares).toFixed(2)).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <br />
        <br />
        <Box
          sx={{
            height: 'auto',
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start'
          }}>
          <Chart />
          <br />
          <br />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 2,
              mt: 2
            }}>
            <CoinDetailsCard
              title="Price"
              mainStat={`$${Number(selectedCoin.price.toFixed(2)).toLocaleString()}` || 0}
              percChange={
                selectedCoin.priceChange ? `${selectedCoin.priceChange?.toFixed(2)}% in 24 hrs` : ''
              }
            />
            <CoinDetailsCard
              title="Market Cap"
              mainStat={`$${Number(selectedCoin.marketCap.toFixed(2)).toLocaleString()}` || 0}
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
          </Box>
        </Box>
      </>
    )
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '200px'
        }}>
        <Box
          sx={{
            flex: 1,
            color: 'customGrey.main',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
          Select a coin on the left
        </Box>
      </Box>
    )
  }
}

export default CoinDetails
