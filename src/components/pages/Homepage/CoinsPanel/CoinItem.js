import { Box, Card, CardMedia, Checkbox, Typography } from '@mui/material'
import React from 'react'

import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { CoinState } from '../../../../ContextAPI/CoinContext'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { WatchedState } from '../../../../ContextAPI/WatchedContext'

const CoinItem = ({
  id,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
  marketCapChange24h,
  totalSupply,
  isWatched
}) => {
  const { selectedCoinGroup, allCoinsGroup } = CoinState() //Using Context API
  const [selectedCoin, setSelectedCoin] = selectedCoinGroup //Using Context API
  const [allCoins] = allCoinsGroup //Using Context API

  const { numWatchedCoinsGroup, filterByWatchedGroup } = WatchedState() //Using Context API
  const [, setNumWatchedCoins] = numWatchedCoinsGroup //Using Context API

  const handleCardClick = (e) => {
    setSelectedCoin({
      id,
      name,
      image,
      symbol,
      price,
      volume,
      priceChange,
      marketCap,
      marketCapChange24h,
      totalSupply,
      isWatched
    })
  }

  let coin = {}
  const handleWatchedClick = (e) => {
    coin = allCoins.find((coin) => {
      return coin.name === name
    })
    if (coin.isWatched) {
      //if already being watched, stop watching
      coin.isWatched = false
      setNumWatchedCoins((numWatched) => numWatched - 1)
    } else {
      //if not being watched, begin watching
      coin.isWatched = true
      setNumWatchedCoins((numWatched) => numWatched + 1)
    }

    // for (let coin of allCoins) {
    //   if (coin.name === name) {
    //     if (coin.isWatched) {
    //       //if already being watched, stop watching
    //       coin.isWatched = false
    //       setNumWatchedCoins((numWatched) => numWatched - 1)
    //     } else {
    //       //if not being watched, begin watching
    //       coin.isWatched = true
    //       setNumWatchedCoins((numWatched) => numWatched + 1)
    //     }
    //     break
    //   }
    // }
  }

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          ml: 1,
          top: '35px',
          justifyContent: 'center',
          z: 2
        }}>
        <Checkbox
          icon={<StarOutlineIcon />}
          checked={isWatched}
          checkedIcon={<StarIcon />}
          sx={{
            position: 'absolute',
            color: '#BAB0A7',
            mr: 2,
            '&.Mui-checked': {
              color: '#FFE205',
              backgroundColor: '#EFB701'
            },
            '& .MuiSvgIcon-root': { fontSize: 35 }
          }}
          onClick={handleWatchedClick}
        />
      </Box>
      <Card
        sx={{
          mb: 2,
          ml: 9,
          height: 120,
          cursor: 'pointer',
          ':hover': { boxShadow: 5 },
          backgroundColor: name === selectedCoin?.name && '#E1E7E3'
        }}
        onClick={handleCardClick}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderSizing: 'border-box',
            mx: 0,
            pl: 2,
            height: 'inherit'
          }}>
          <Box
            sx={{
              display: 'flex',
              width: '60%',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
            <CardMedia
              component="img"
              image={image}
              alt="cryptocurrency logo"
              sx={{
                height: 40,
                width: 40,
                filter: 'grayscale(80%)'
              }}
            />

            <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" sx={{ fontWeight: 100 }}>
                {name}
              </Typography>
              <Typography
                variant="h7"
                sx={{ fontWeight: 100, textTransform: 'uppercase', color: '#909194' }}>
                {symbol}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: 'none', lg: 'flex' },
              flexDirection: 'column',
              width: '30%',
              pr: 1,
              minWidth: 80,

              textAlign: 'right'
            }}>
            <Box component={'span'} sx={{ pr: 1 }}>
              ${Number(price?.toFixed(2)).toLocaleString()}
            </Box>
            {priceChange < 0 ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  color: 'red'
                }}>
                <ArrowDropDownIcon sx={{ pb: 0.5, mr: -0.5 }} />
                {priceChange?.toFixed(2)}%
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  color: 'darkGreen'
                }}>
                <ArrowDropUpIcon sx={{ pb: 0.5, mr: -0.5 }} />
                {priceChange?.toFixed(2)}%
              </Box>
            )}
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default CoinItem
