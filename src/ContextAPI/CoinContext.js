import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { CoinListData } from '../config/coingeckoAPI'

const CoinContext = createContext()

const CoinProvider = ({ children }) => {
  const [selectedCoin, setSelectedCoin] = useState()
  const [allCoins, setAllCoins] = useState([])

  useEffect(() => {
    axios
      .get(CoinListData())
      .then((res) => {
        let newCoins = res.data.map((coin) => ({ ...coin, isWatched: false }))
        setAllCoins(newCoins)
        console.log('resolved coins: ', newCoins)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <CoinContext.Provider
      value={{
        selectedCoinGroup: [selectedCoin, setSelectedCoin],
        allCoinsGroup: [allCoins, setAllCoins]
      }}>
      {children}
    </CoinContext.Provider>
  )
}

export default CoinProvider

export const CoinState = () => {
  return useContext(CoinContext)
}
