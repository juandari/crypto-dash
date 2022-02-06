import { NextPage } from 'next'
import React, { useEffect, useMemo, useState } from 'react'

import { useTicker } from '@hooks/useTicker'
import { CryptoCurrencyAsset, useAssets } from '@hooks/useAssets'
import { Button, ResponsiveTable, Spinner, MarketFilter } from '@components'
import { toast } from 'react-toastify'
import { Data as TableData } from '@components/ResponsiveTable/ResponsiveTable'
import { innerJoin } from '@utils/join'
import { distinctArrayOfStrings } from '@utils/array'
import Pagination from '@components/Pagination'

const PAGE_LIMIT = 20

const Dashboard: NextPage = () => {
  const {
    data: assets,
    isLoading: isLoadingAssets,
    isError: isErrorAssets,
  } = useAssets()
  const {
    data: tickers,
    isLoading: isLoadingTicker,
    isError: isErrorTicker,
  } = useTicker()
  const [activeTag, setActiveTag] = useState('all')

  if (isErrorAssets || isErrorTicker) toast.error('Error retrieving data')

  const tags = useMemo(() => {
    if (assets?.data) return distinctArrayOfStrings(assets.data, 'tags')
  }, [assets?.data])

  const usdtTicker = useMemo(() => {
    const usdt = tickers?.filter((ticker) => ticker.symbol.match(/usdt$/i))

    const filteredUsdt = usdt?.map((ticker) => {
      const usdtIndex = ticker.symbol.match(/usdt/i)?.index
      return {
        ticker: ticker.symbol.slice(0, usdtIndex),
        price: ticker.lastPrice,
        dayChange: ticker.priceChangePercent,
        // temporarily market cap use volume
        // because I can't get market cap data
        marketCap: ticker.quoteVolume,
        volume: ticker.quoteVolume,
      }
    })

    return filteredUsdt
  }, [tickers])

  const tableData = useMemo(() => {
    return innerJoin(
      assets?.data,
      usdtTicker,
      'assetCode',
      'ticker',
      (
        asset: CryptoCurrencyAsset,
        ticker: Omit<TableData, 'logo' | 'name'>
      ) => ({
        ...ticker,
        logo: asset?.logoUrl,
        name: asset?.assetName,
        tags: asset?.tags,
      })
    ) as TableData[]
  }, [assets?.data, usdtTicker])

  const dataChunks = useMemo(() => {
    const chunks = []

    for (let i = 0; i < tableData?.length; i = i + PAGE_LIMIT) {
      const tempArr = tableData?.slice(i, i + PAGE_LIMIT)
      chunks.push(tempArr)
    }
    return chunks
  }, [tableData])

  const [activePage, setActivePage] = useState(0)
  const [data, setData] = useState(dataChunks[activePage])

  useEffect(() => {
    if (dataChunks) setData(dataChunks[activePage])
  }, [activePage, dataChunks])

  const renderButton = () => {
    return (
      <>
        <Button
          active={activeTag === 'all'}
          onClick={() => setActiveTag('all')}
        >
          All
        </Button>
        {tags?.map((tag) => (
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

  const handlePageClick = (selectedItem: { selected: number }) => {
    setActivePage(selectedItem.selected)
    setData(dataChunks[selectedItem.selected])
  }
  console.log(data, 'data')

  return (
    <div>
      <MarketFilter placeholder="Search Coin Name">
        {isLoadingAssets ? <Spinner /> : renderButton()}
      </MarketFilter>
      <div className="mt-4">
        {isLoadingTicker || isLoadingAssets ? (
          <Spinner />
        ) : (
          <div className="mb-5 flex flex-col gap-4">
            <ResponsiveTable data={data} />
            <Pagination
              pageCount={dataChunks.length}
              onPageChange={handlePageClick}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
