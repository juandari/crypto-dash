import MarketFilter from '@components/MarketFilter'
import { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import { useTicker } from '@hooks/useTicker'
import { useAssets } from '@hooks/useAssets'
import Button from '@components/Button'

const Dashboard: NextPage = () => {
  const { data: assets, isLoading, isError } = useAssets()

  const tags = useMemo(() => {
    const result: string[] = []
    assets?.data.forEach((item) => {
      item.tags.forEach((tag) => result.push(tag))
    })
    return [...new Set(result)]
  }, [assets?.data])

  const renderButton = () => {
    return tags.map((tag) => (
      <>
        <Button key={tag}>{tag}</Button>
      </>
    ))
  }

  return (
    <div>
      <MarketFilter placeholder="Search Coin Name">
        <Button active>All</Button>
        {renderButton()}
      </MarketFilter>
    </div>
  )
}

export default Dashboard
