import IconSearch from '@components/Icon/IconSearch'
import React from 'react'

export type MarketFilterProps = {
  children?: React.ReactNode
  value?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

function MarketFilter({
  children,
  value,
  handleChange,
  placeholder,
}: MarketFilterProps) {
  return (
    <div className="w-full py-2 relative">
      <div>{children}</div>
      <div className="w-[190px]">
        <div className="relative">
          <IconSearch className="absolute left-3 top-2 text-gray-500 w-5 h-5" />
          <input
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            className="rounded-sm border border-gray-300 pl-10 w-full py-1 pr-2"
          />
        </div>
      </div>
    </div>
  )
}

export default MarketFilter
