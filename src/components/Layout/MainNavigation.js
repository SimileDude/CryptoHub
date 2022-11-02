import { Link } from 'react-router-dom'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import { useState } from 'react'

const MainNavigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#45735E' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Version */}
          <CurrencyBitcoinIcon
            onClick={(event) => (window.location.href = '/')}
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              fontSize: 40,
              transform: 'skew(-0.06turn, 18deg)',
              cursor: 'pointer'
            }}
          />
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }
            }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 100,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '2rem'
              }}>
              CRYPTO
            </Typography>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '2rem',
                fontFamily: 'Abril Fatface, cursive'
              }}>
              HUB
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation pages"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              <MenuItem key="home" onClick={handleCloseNavMenu}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    noWrap
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      px: 3,
                      color: 'darkGreen.main',
                      display: 'block',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }}>
                    HOME
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem key="about" onClick={handleCloseNavMenu}>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Typography
                    onClick={handleCloseNavMenu}
                    textAlign="center"
                    sx={{
                      my: 2,
                      px: 3,
                      color: 'darkGreen.main',
                      display: 'block',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }}>
                    ABOUT
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* Non-Mobile Version */}
          <CurrencyBitcoinIcon
            onClick={(event) => (window.location.href = '/')}
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              cursor: 'pointer'
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              alignItems: 'baseline',
              justifyContent: 'flex-start'
            }}>
            <Box
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}>
              CRYPTO
            </Box>
            <Box
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                letterSpacing: '.3rem',
                color: 'inherit',
                fontFamily: 'Abril Fatface, cursive',
                textDecoration: 'none'
              }}>
              HUB
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 4,
                  color: 'white',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  fontWeight: 700
                }}>
                HOME
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button
                key="about"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 4,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none'
                }}>
                ABOUT
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MainNavigation
