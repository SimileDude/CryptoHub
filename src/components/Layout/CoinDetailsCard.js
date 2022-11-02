import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

const CoinDetailsCard = ({ title, mainStat, percChange }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        bgcolor: '#E1E7E3',
        minWidth: 150,
        minHeight: 100,
        maxHeight: 200,
        mb: 2
      }}>
      <CardContent>
        <Typography sx={{ fontSize: '.75rem', fontWeight: 500, mb: 2 }}>{title}</Typography>
        <Typography sx={{ fontSize: '.9rem', fontWeight: 300, opacity: 0.7 }}>
          {percChange ? percChange : ' '}
        </Typography>
        <Typography variant="h7" sx={{ fontWeight: 400 }}>
          {mainStat}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CoinDetailsCard
