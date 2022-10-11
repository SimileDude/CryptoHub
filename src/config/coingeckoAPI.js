export const CoinListData = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`

export const SingleCoinData = (id) => `https://api.coingecko.com/api/v3/coins/${id}`

export const HistoricalChartData = (id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=cad&days=${days}`

export const TrendingCoinsData = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
