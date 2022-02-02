import MarketFilter from '@components/MarketFilter'
import { NextPage } from 'next'
import React from 'react'
import { useTicker } from '@hooks/useTicker'
import { useAssets } from '@hooks/useAssets'

const Dashboard: NextPage = () => {
  const { data: assets, isLoading, isError } = useAssets()
  console.log(assets)

  return (
    <div>
      <MarketFilter placeholder="Search Coin Name" />
    </div>
  )
}

export default Dashboard
