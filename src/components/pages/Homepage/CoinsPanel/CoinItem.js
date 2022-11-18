import { Box, Button, Card, CardMedia, Checkbox, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import StarIcon from '@mui/icons-material/Star'
import CancelIcon from '@mui/icons-material/Cancel'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { CoinState } from '../../../../ContextAPI/CoinContext'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { WatchedState } from '../../../../ContextAPI/WatchedContext'
import CoinDetails from '../CoinDetails/CoinDetails'
import { useTheme } from '@emotion/react'

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

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  //Method provided by mui, used for pop up on smaller devices
  const theme = useTheme()
  const showPopup = useMediaQuery(theme.breakpoints.down('md'))

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
    showPopup && setOpen((o) => !o)
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
      {
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <Box
            sx={{
              p: 4,
              height: '80vh',
              mt: '75px',
              minHeight: '400px',
              background:
                'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 60%, rgb(228,236,230,1) 95%)',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              overflowY: 'scroll'
            }}>
            <Button
              sx={{
                color: 'black',
                position: 'absolute',
                top: '90px',
                right: 10,
                fontSize: '35px'
              }}
              onClick={closeModal}>
              <CancelIcon fontSize="large" />
            </Button>
            <Box sx={{ mt: '-100px' }}>
              <CoinDetails />
            </Box>
          </Box>
        </Popup>
      }
    </>
  )
}

export default CoinItem
