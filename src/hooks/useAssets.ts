import { useQuery } from 'react-query'

type CryptoCurrencyAsset = {
  id: string
  assetCode: string
  assetName: string
  logoUrl: string
  fullLogoUrl: string
  tags: string[]
}

export type Response = {
  code: string
  message: string | null
  messageDetail: string | null
  data: CryptoCurrencyAsset[]
}

const fetchAssets = async () => {
  const res = await fetch(
    'https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset'
  )
  const parsed = (await res.json()) as Response
  return parsed
}

const useAssets = () => {
  return useQuery('assets', () => fetchAssets())
}

export { useAssets, fetchAssets }
