import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { formatCurrency } from '@utils/formatter'

export type Data = {
  logo: string
  name: string
  ticker: string
  price: string
  dayChange: string
  marketCap: string
  volume: string
  tags?: string[]
}

const DEFAULT_LOGO = 'https://bitcoin.org/img/icons/opengraph.png?1643058474'

export type TableProps = {
  data?: Data[]
}

function ResponsiveTable({ data }: TableProps) {
  return (
    <>
      {/* LARGE SCREEN */}
      <div className="hidden md:block">
        {/* HEADER */}
        <div className="flex px-[16px] py-[12px] bg-gray-200 text-xs">
          <div className="w-[220px]">
            <span>Name</span>
          </div>
          <div className="w-[200px]">
            <span>Price</span>
          </div>
          <div className="w-[150px] text-right">
            <span>24h Change</span>
          </div>
          <div className="w-[200px] text-right">
            <span>Market Cap</span>
          </div>
          <div className="w-[180px]">
            <span></span>
          </div>
        </div>

        {/* DATA */}
        {data?.map((item) => (
          <div key={item.ticker} className="flex px-[16px] py-[12px]">
            {/* First Col */}
            <div className="w-[220px] flex gap-3 items-center">
              <Image
                src={DEFAULT_LOGO}
                alt={item.ticker}
                height={30}
                width={30}
              />
              <div className="flex flex-col">
                <span>{item.ticker}</span>
                <span className="text-xs text-gray-500">{item.name}</span>
              </div>
            </div>

            {/* Second Col */}
            <div className="w-[200px]">
              <span>{formatCurrency(Number(item.price), 5)}</span>
            </div>

            {/* Third Col */}
            <div
              className={`w-[150px] text-right ${
                item.dayChange[0] === '-' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              <span>
                {item.dayChange[0] === '-'
                  ? item.dayChange
                  : '+' + item.dayChange}
                %
              </span>
            </div>

            {/* Fourth Col */}
            <div className="w-[200px] text-right">
              <span>{formatCurrency(Number(item.marketCap))}</span>
            </div>

            {/* Fifth Col */}
            <div className="w-[180px] text-right">
              <Link href="/">
                <a className="text-yellow-600 border rounded-md border-gray-300 px-3 py-2 hover:bg-yellow-100">
                  Trade
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* SMALL SCREEN */}
      <div className="md:hidden">
        {/* HEADER */}
        <div className="text-xs flex justify-between px-[16px] text-gray-400 mb-3">
          <span className="w-1/3">Name</span>
          <span className="w-1/3 text-center">Price/24h Change</span>
          <span className="w-1/3 text-right">Cap/Vol</span>
        </div>

        {/* DATA */}
        {data?.map((item) => (
          <div
            key={item.ticker}
            className="flex justify-between px-[16px] py-3"
          >
            {/* First Col */}
            <div className="flex gap-3 items-center w-1/3">
              <Image
                src={DEFAULT_LOGO}
                alt={item.ticker}
                height={30}
                width={30}
              />
              <div className="flex flex-col">
                <span>{item.ticker}</span>
                <span className="text-xs text-gray-500">{item.name}</span>
              </div>
            </div>

            {/* Second Col */}
            <div className="flex flex-col w-1/3 text-center">
              <span>{formatCurrency(Number(item.price), 5)}</span>
              <span
                className={`text-sm ${
                  item.dayChange[0] === '-' ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {item.dayChange[0] === '-'
                  ? item.dayChange
                  : '+' + item.dayChange}
                %
              </span>
            </div>

            {/* Third Col */}
            <div className="flex flex-col w-1/3 text-right">
              <span className="font-medium">
                {formatCurrency(Number(item.marketCap))}
              </span>
              <span className="text-xs text-gray-500">
                {formatCurrency(Number(item.volume))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ResponsiveTable
