import React, { createContext, useState } from 'react'
import { useContext } from 'react'

const WatchedContext = createContext()

const WatchedProvider = ({ children }) => {
  const [numWatchedCoins, setNumWatchedCoins] = useState(0)
  const [filterByWatched, setFilterByWatched] = useState(false)

  return (
    <WatchedContext.Provider
      value={{
        numWatchedCoinsGroup: [numWatchedCoins, setNumWatchedCoins],
        filterByWatchedGroup: [filterByWatched, setFilterByWatched]
      }}>
      {children}
    </WatchedContext.Provider>
  )
}

export default WatchedProvider

export const WatchedState = () => {
  return useContext(WatchedContext)
}
