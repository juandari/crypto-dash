import MarketFilter from '@components/MarketFilter'
import { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import { useTicker } from '@hooks/useTicker'
import { useAssets } from '@hooks/useAssets'
import Button from '@components/Button'
import Table from '@components/Table'
import Link from 'next/link'

const Dashboard: NextPage = () => {
  const { data: assets, isLoading, isError } = useAssets()

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Last Price',
        accessor: 'lastPrice',
      },
      {
        Header: '24h Change',
        accessor: 'dayChange',
      },
      {
        Header: 'Market Cap',
        accessor: 'marketCap',
      },
      {
        Header: '',
        accessor: 'action',
        Cell: ({ value }: { value: string }) => (
          <Link href="/">
            <a className="text-yellow-500 border rounded-md border-gray-300 px-3 py-2 hover:bg-yellow-100">
              {value}
            </a>
          </Link>
        ),
      },
    ],
    []
  )

  const data = React.useMemo(
    () => [
      {
        name: 'BTC',
        lastPrice: '10000',
        dayChange: '229',
        marketCap: '9000000',
        action: 'Trade',
      },
      {
        name: 'ETH',
        lastPrice: '1000',
        dayChange: '229',
        marketCap: '900000',
        action: 'Trade',
      },
    ],
    []
  )

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
      <div className="mt-4">
        <Table columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Dashboard
