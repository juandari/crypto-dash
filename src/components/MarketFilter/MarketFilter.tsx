import IconSearch from '@components/Icon/IconSearch'
import React from 'react'

export type MarketFilterProps = {
  children?: React.ReactNode
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

function MarketFilter({
  children,
  value,
  onChange,
  placeholder,
}: MarketFilterProps) {
  return (
    <div className="w-full py-2 relative">
      <div className="flex overflow-x-auto scrollbar-hide gap-2 w-full sm:w-[74%]">
        {children}
      </div>
      <div className="w-full sm:w-[190px] sm:absolute sm:top-2 sm:right-0 mt-4 sm:mt-0">
        <div className="relative">
          <IconSearch className="absolute left-3 top-2 text-gray-500 w-5 h-5" />
          <input
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="rounded-md border border-gray-300 pl-10 w-full py-1 pr-2"
          />
        </div>
      </div>
    </div>
  )
}

export default MarketFilter
