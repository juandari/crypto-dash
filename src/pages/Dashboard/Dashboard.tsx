import { NextPage } from 'next'
import React, { useMemo, useState } from 'react'

import { useTicker } from '@hooks/useTicker'
import { useAssets } from '@hooks/useAssets'
import { Button, ResponsiveTable, Spinner, MarketFilter } from '@components'

const Dashboard: NextPage = () => {
  const {
    data: assets,
    isLoading: isLoadingAssets,
    isError: isErrorAssets,
  } = useAssets()
  const {
    data: ticker,
    isLoading: isLoadingTicker,
    isError: isErrorTicker,
  } = useTicker()
  const [activeTag, setActiveTag] = useState('all')
  console.log(assets, 'assets')
  console.log(ticker, 'ticker')

  const tags = useMemo(() => {
    const result: string[] = []
    assets?.data.forEach((item) => {
      item.tags.forEach((tag) => result.push(tag))
    })
    return [...new Set(result)]
  }, [assets?.data])

  const renderButton = () => {
    return (
      <>
        <Button
          active={activeTag === 'all'}
          onClick={() => setActiveTag('all')}
        >
          All
        </Button>
        {tags.map((tag) => (
          <Button
            key={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </>
    )
  }

  return (
    <div>
      <MarketFilter placeholder="Search Coin Name">
        {renderButton()}
      </MarketFilter>
      <div className="mt-4">
        {isLoadingTicker ? <Spinner /> : <ResponsiveTable />}
      </div>
    </div>
  )
}

export default Dashboard
