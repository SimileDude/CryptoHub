import { makeStyles } from '@mui/styles'
import React from 'react'

const ButtonChartTime = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      cursor: 'pointer',
      padding: 6,
      marginRight: 20,
      marginTop: 4,
      color: selected ? '' : '#1D1E1D',
      backgroundColor: selected ? '#C0CFBC' : '',
      fontWeight: selected ? '400' : '100',
      border: selected ? '1px solid #C0CFBC' : '',
      borderRadius: 5,
      fontSize: '.9rem',
      '&:hover': {
        backgroundColor: '#d6e8d1'
      }
    }
  })

  const classes = useStyles()

  return (
    <span selected={selected} onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  )
}

export default ButtonChartTime
