import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { HistoricalChartData } from '../../../../config/coingeckoAPI'
import { chartTimeFrames } from '../../../../config/chartTimeFrames'
import { Box } from '@mui/system'
import ButtonChartTime from '../../../Layout/ButtonChartTime'

const Chart = ({ selectedCoin }) => {
  const [historicalData, setHistoricalData] = useState()
  const [days, setDays] = useState(1)

  //use a ref variable to keep from fetching data on first mount
  const isMounted = useRef(false)

  const getHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChartData(selectedCoin.id, days))
    setHistoricalData(data.prices)
  }

  useEffect(() => {
    if (isMounted.current) {
      getHistoricalData()
    } else {
      isMounted.current = true
    }
  }, [days, selectedCoin])

  if (historicalData) {
    return (
      <>
        <Line
          data={{
            labels: historicalData.map((priceInfo) => {
              let date = new Date(priceInfo[0])
              let minutes =
                date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
              let hours = date.getMinutes() === 0 ? `12` : `${date.getHours()}`
              let time = hours > 12 ? `${hours - 12}: ${minutes} PM` : `${hours}:${minutes} AM`

              return days === 1 ? time : date.toLocaleDateString()
            }),
            datasets: [
              {
                data: historicalData.map((priceInfo) => priceInfo[1]),
                label: `Price (Past ${days} Days)`,
                borderColor: '#C0CFBC'
              }
            ]
          }}
          options={{
            elements: {
              point: {
                radius: 1
              }
            }
          }}
        />
        <Box sx={{ mt: '2%', mb: '10%' }}>
          {chartTimeFrames.map((timeFrame) => (
            <ButtonChartTime
              key={timeFrame.value}
              onClick={() => setDays(timeFrame.value)}
              selected={timeFrame.value === days}>
              {timeFrame.label}
            </ButtonChartTime>
          ))}
        </Box>
      </>
    )
  } else if (selectedCoin) {
    return <CircularProgress sx={{ color: '#C0CFBC' }} size={400} thickness={1} />
  }
}

export default Chart
