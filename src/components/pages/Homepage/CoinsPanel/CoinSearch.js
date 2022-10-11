import { Box, Divider, Icon, InputBase, Paper } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

function CoinSearch({ onSearch }) {
  return (
    <Box sx={{ pb: 4 }}>
      <Paper
        elevation={1}
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          backgroundColor: '#C0CFBC' //'#EFB701'
        }}>
        <Icon aria-label="search" sx={{ mx: 2, color: 'white' }}>
          <SearchSharpIcon />
        </Icon>
        <Divider sx={{ height: 28, m: 0.5, color: 'yellow' }} orientation="vertical" />

        <InputBase
          sx={{ flex: 1, ml: 2, color: 'black', py: 1 }}
          type="text"
          placeholder="Search Coins"
          id="searchBox"
          inputProps={{ 'aria-label': 'search coins' }}
          onChange={onSearch}
        />
      </Paper>
    </Box>
  )
}

export default CoinSearch
