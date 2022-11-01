import { CoinState } from '../../../../ContextAPI/CoinContext'
import { WatchedState } from '../../../../ContextAPI/WatchedContext'
import CoinItem from './CoinItem'

function CoinList({ search }) {
  const { numWatchedCoinsGroup, filterByWatchedGroup } = WatchedState()
  const [filterByWatched] = filterByWatchedGroup

  const { selectedCoinGroup, allCoinsGroup } = CoinState() //Using Context API
  const [allCoins, setAllCoins] = allCoinsGroup //Using Context API

  //Function used when user Searches
  const searchFilter = (arr) => {
    return arr.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  }

  let array = filterByWatched
    ? searchFilter(allCoins.filter((coin) => coin.isWatched === true))
    : searchFilter(allCoins)

  return (
    <>
      {array.map((coin, index) => {
        return (
          <div key={index}>
            <CoinItem
              name={coin.name}
              id={coin.id}
              image={coin.image}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              marketCapChange24h={coin.market_cap_change_percentage_24h}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              totalSupply={coin.circulating_supply}
              isWatched={coin.isWatched}
            />
          </div>
        )
      })}
    </>
  )
}

export default CoinList
