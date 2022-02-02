import { useQuery } from 'react-query'

export type Ticker = {
  symbol: string
  priceChange: string
  priceChangePercent: string
  prevClosePrice: string
  lastPrice: string
  volume: string
}
export type Response = Ticker[]

const fetchTicker = async () => {
  const res = await fetch('https://api.binance.com/api/v3/ticker/24hr')
  const parsed = (await res.json()) as Response
  return parsed
}

const useTicker = () => {
  return useQuery('ticker', () => fetchTicker())
}

export { useTicker, fetchTicker }
